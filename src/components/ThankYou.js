import React from 'react';

import { Grid, Box, Paper, Button, Typography } from '@material-ui/core';

function ThankYou(props) {

    return (
      <Grid container spacing={2}>

        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <Paper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                  Thank you for your request!
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" gutterBottom>
                  A representative will contact you in shortly.
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button fullWidth onClick={props.startOver}
                  variant="contained" color="primary">
                  Start Again
              </Button>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    )
}
        
export default ThankYou;