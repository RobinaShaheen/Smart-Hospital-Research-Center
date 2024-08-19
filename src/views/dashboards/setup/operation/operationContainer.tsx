import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import OperationCategory from './operationCategory/operationCategory'
import OperationList from './operation/operation'
// import other setting components as needed

const OperationContainer = ({ selectedOperation }: { selectedOperation: string }) => {
  const renderOperation = () => {
    switch (selectedOperation) {
      case 'OperationCategory':
        return <OperationCategory/>
      case 'OperationList':
        return <OperationList/>
      // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderOperation()}
      </Grid>
    </Grid>
  )
}

export default OperationContainer
