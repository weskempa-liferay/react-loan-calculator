import React from 'react';

import { Grid, Box, Paper, Button, Typography } from '@material-ui/core';

import {useIntl} from 'react-intl';

function ThankYou(props) {

  const intl = useIntl();

  return (
    <Grid container spacing={2}>

      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <Paper>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              {intl.formatMessage({id: 'thank-you'})}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom>
              {intl.formatMessage({id: 'thank-you-more'})}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button fullWidth onClick={props.startOver}
                variant="contained" color="primary">
                {intl.formatMessage({id: 'start-again'})}
            </Button>
          </Box>
        </Paper>
      </Grid>

    </Grid>
  )
}
        
export default ThankYou;