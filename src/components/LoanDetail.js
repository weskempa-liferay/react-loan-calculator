import React, {useEffect} from 'react';

import { Grid, Box, Paper, Typography, TextField, Select, Button, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Amortization from './Amortization';
import LiferayApi from '../common/services/liferay/api';

function LoanDetail(props) {

    useEffect(() => {
        if(!props.store.initialized){
            fetchRates();
            handleInitializeChange(true);
        }
    });

    function handleInitializeChange(value) {
        props.dispatch({ type: 'INITIALIZE', value });
    }

    function handleLoanAmountChange(event) {
        let value = event.target.value;
        props.dispatch({ type: 'LOAN_AMOUNT', value });
    }

    function handleRemainingTermChange(event) {
        let value = event.target.value
        handleInterestRateChange(findRate(value));

        props.dispatch({ type: 'REMAINING_TERM', value });
    }

    function handleInterestRateChange(value) {
        props.dispatch({ type: 'INTEREST_RATE', value });
    }

    function handleInterestRateListChange(value) {
        props.dispatch({ type: 'INTEREST_RATE_LIST', value });
    }

    function fetchRates(){
        LiferayApi("o/c/rates/")
        .then((result) => {
            let rates = loadRates(result.data.items);
            console.log(rates);
            handleInterestRateListChange(rates);
        })
        .catch(console.log)
    }

    function loadRates(data){
        let rateList = [];
        for (let key in data){
            let opt = {};
            opt.rate = data[key].rate;
            opt.term = data[key].term;
            rateList.push(opt);
        }
        return rateList;
    };

    function findRate(term){
        for(let key in props.store.interestRateList){
            if(props.store.interestRateList[key].term === term){
                return props.store.interestRateList[key].rate;
            }
        }
        return 0;
    }

    return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Loan Details
                    </Typography>
                </Box>
                <Box sx={{ p: 2 }}>
                    <TextField label="Loan Amount" 
                        fullWidth variant="outlined"
                        onChange={handleLoanAmountChange}
                        value={props.store.loanAmount} />
                </Box>
                <Box sx={{ p: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="remaining-term-label">Remaining Term</InputLabel>
                        <Select
                            fullWidth  variant="standard"
                            labelId="remaining-term-label"
                            onChange={handleRemainingTermChange}
                            value={props.store.remainingTerm}
                        >
                            {Object.entries(props.store.interestRateList).map(([key, obj], index) => { return (
                                <MenuItem key={key} value={obj.term}>{obj.term}</MenuItem>
                            )})}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ p: 2 }}>
                    <TextField label="Interest Rate" disabled fullWidth  
                        variant="standard" value={props.store.interestRate}/>
                </Box>
                <Box sx={{ p: 2 }}>
                    <Button fullWidth onClick={props.handleNext}
                        variant="contained" color="primary">
                        Next
                    </Button>
                </Box>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Amortization store={props.store} />
          </Grid>
        </Grid>
    )
}

export default LoanDetail;