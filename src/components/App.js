import React, {useState} from 'react';
import '../styles/App.css';

import {Container} from '@material-ui/core';
import {Step, Stepper, StepLabel} from '@mui/material';

import LoanDetail from './LoanDetail';
import UserInfo from './UserInfo';
import ThankYou from './ThankYou';
import useStore from '../useStore';

import LiferayApi from '../common/services/liferay/api';

import {useIntl} from 'react-intl';

function App(){

  const intl = useIntl();

  const [store, dispatch] = useStore();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
      intl.formatMessage({id: 'loan-details'}),
      intl.formatMessage({id: 'contact-information'}),
      intl.formatMessage({id: 'review'})
    ];

  function postRequest(){
      LiferayApi("o/c/loanrequests/", {
          method: 'POST', 
          body: {
            "amount": store.loanAmount,
            "rate": store.interestRate,
            "term": store.remainingTerm,
            "firstName": store.firstName,
            "lastName": store.lastName,
            "emailAddress": store.emailAddress
          }
      })
      .then((result) => {
          console.log("Posted Load Request");
          console.log(result.data);
      })
      .catch(console.log)
  }

  function handleNext(event) {
    setActiveStep(activeStep + 1);
  };

  function handleBack(event) {
    setActiveStep(activeStep - 1);
  };

  function completeRequest(event) {
    postRequest();
    setActiveStep(activeStep + 1);
  };

  function startOver(event) {
    setActiveStep(0);
    dispatch({ type: 'RESET' });
  };

  function getStepContent(step) {
      switch (step) {
        case 0:
          return (
                  <LoanDetail 
                      handleNext={handleNext}
                      dispatch={dispatch} 
                      store={store} 
                  />
                );
        case 1:
          return (
                  <UserInfo
                    completeRequest={completeRequest}
                    handleBack={handleBack}
                    dispatch={dispatch} 
                    store={store} 
                  />
                 );
        case 2:
          return (<ThankYou
                    startOver={startOver}
                    dispatch={dispatch} 
                    store={store} 
                  />
                 );
        default:
          throw new Error('Unknown step');
      }
    }

  return (
    <Container maxWidth="md" className="App">

      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {getStepContent(activeStep)}

    </Container>
  );
}
export default App;