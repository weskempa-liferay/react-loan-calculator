import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Box, Paper, Typography } from '@material-ui/core';

function fixedFloat(nbr, toFixed = 2) {
  return parseFloat(nbr.toFixed(toFixed));
}

// a / {[(1 + i) ^n] - 1} / [i(1 + i)^n]
// ia / [1 − (1+i)^-n]
function calculateRepaymentAmount(a, n, i) {
  // return a / (((1 + i) ** n - 1) / (i * (1 + i) ** n));
  return (i * a) / (1 - (1 + i) ** -n);
}

function Amortization(props) {
  const { loanAmount, remainingTerm, interestRate } = props.store;

  console.log("loanAmount:"+loanAmount);
  console.log("remainingTerm:"+remainingTerm);
  console.log("interestRate:"+interestRate);

  if (!loanAmount || !remainingTerm || !interestRate) {
    return (<Paper>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Loan Repayment Schedule
        </Typography>
      </Box>
    </Paper>);
  }

  const rows = Math.ceil(remainingTerm * 12);
  const repaymentAmount = fixedFloat(
    calculateRepaymentAmount(
      loanAmount,
      remainingTerm * 12,
      interestRate / 100 / 12
    )
  );
  
  const columns = [
    { field: 'id', headerName: '#', type: 'number', width: 30 },
    { field: 'balance', headerName: 'Balance', type: 'number', width: 130 },
    { field: 'monthlyRepayment', headerName: 'Monthly', type: 'number', width: 130 },
    { field: 'principal', headerName: 'Principal', type: 'number', width: 130 },
    { field: 'interest', headerName: 'Interest', type: 'number', width: 130 }
  ];
  
  const rowData = [];
    
  let count = 0;
  let balance = loanAmount;

  while(balance>0){

    const interest = fixedFloat((balance * interestRate) / 100 / 12);
    const principal = fixedFloat(repaymentAmount - interest);
    const newRow = {};

    newRow.id=count++;
    newRow.balance= fixedFloat(balance - principal);
    newRow.monthlyRepayment= repaymentAmount;
    newRow.principal= fixedFloat(repaymentAmount - interest);
    newRow.interest= fixedFloat((balance * interestRate) / 100 / 12);

    balance = fixedFloat(balance - principal);
    
    rowData.push(newRow);
  }

  return (
    <Paper>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Loan Repayment Schedule
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
              rows={rowData}
              columns={columns}
              pageSize={5}
              height={100}
              rowsPerPageOptions={[5]}
            />
        </div>
      </Box>
    </Paper>
  );
}

export default Amortization;
