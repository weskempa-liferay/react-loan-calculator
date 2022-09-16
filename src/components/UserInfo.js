import React from 'react';

import { Grid, Box, Paper, Typography, TextField, Select, Button, MenuItem, FormControl, InputLabel } from '@material-ui/core';

function UserInfo(props) {

  function handleFirstNameChange(event) {
    let value = event.target.value
    props.dispatch({ type: 'FIRST_NAME', value });
  }

  function handleLastNameChange(event) {
    let value = event.target.value
    props.dispatch({ type: 'LAST_NAME', value });
  }

  function handleEmailChange(event) {
    let value = event.target.value
    props.dispatch({ type: 'EMAIL_ADDRESS', value });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                  Loan Details in Review
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <TextField label="Loan Amount" 
                  fullWidth disabled variant="outlined"
                  value={props.store.loanAmount} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label="Remaining Term" 
                    fullWidth disabled variant="outlined"
                    value={props.store.remainingTerm} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label="Interest Rate" 
                    fullWidth disabled variant="outlined"
                    value={props.store.interestRate} />
            </Box>
            <Box sx={{ p: 2 }}>
              <Button fullWidth onClick={props.handleBack}
                  variant="contained" color="primary">
                  Previous
              </Button>
            </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                  Your Contact Inforamtion
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <TextField label="First Name" 
                  fullWidth variant="outlined"
                  onChange={handleFirstNameChange}
                  value={props.store.firstName} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label="Last Name" 
                    fullWidth variant="outlined"
                    onChange={handleLastNameChange}
                    value={props.store.lastName} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label="Email Address" 
                    fullWidth variant="outlined"
                    onChange={handleEmailChange}
                    value={props.store.emailAddress} />
            </Box>
            <Box sx={{ p: 2 }}>
              <Button fullWidth onClick={props.completeRequest}
                  variant="contained" color="primary">
                  Submit Loan Request
              </Button>
            </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
        
export default UserInfo;