import React from 'react';

import { Grid, Box, Paper, Typography, TextField, Button } from '@material-ui/core';

import {useIntl} from 'react-intl';

function UserInfo(props) {

  const intl = useIntl();

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
                  {intl.formatMessage({id: 'in-review'})}
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <TextField label={intl.formatMessage({id: 'loan-amount'})} 
                  fullWidth disabled variant="outlined"
                  value={props.store.loanAmount} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label={intl.formatMessage({id: 'remaining-term'})} 
                    fullWidth disabled variant="outlined"
                    value={props.store.remainingTerm} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label={intl.formatMessage({id: 'interest-rate'})}
                    fullWidth disabled variant="outlined"
                    value={props.store.interestRate} />
            </Box>
            <Box sx={{ p: 2 }}>
              <Button fullWidth onClick={props.handleBack}
                  variant="contained" color="primary">
                  {intl.formatMessage({id: 'previous'})}
              </Button>
            </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                {intl.formatMessage({id: 'your-contact-information'})}
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <TextField label={intl.formatMessage({id: 'first-name'})}
                  fullWidth variant="outlined"
                  onChange={handleFirstNameChange}
                  value={props.store.firstName} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label={intl.formatMessage({id: 'last-name'})} 
                    fullWidth variant="outlined"
                    onChange={handleLastNameChange}
                    value={props.store.lastName} />
            </Box>
            <Box sx={{ p: 2 }}>
                <TextField label={intl.formatMessage({id: 'email-address'})}
                    fullWidth variant="outlined"
                    onChange={handleEmailChange}
                    value={props.store.emailAddress} />
            </Box>
            <Box sx={{ p: 2 }}>
              <Button fullWidth onClick={props.completeRequest}
                  variant="contained" color="primary">
                  {intl.formatMessage({id: 'submit-loan-request'})}
              </Button>
            </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
        
export default UserInfo;