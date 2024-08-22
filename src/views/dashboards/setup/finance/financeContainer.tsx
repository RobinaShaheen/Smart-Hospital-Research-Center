import React from 'react'
import Grid from '@mui/material/Grid'
import IncomeHead from './incomeHead/incomeHead'
import ExpenseHead from './expenseHead/expenseHead'

// import other setting components as needed

const FinanceContainer = ({ selectedFinance }: { selectedFinance: string }) => {
  const renderFinance = () => {
    switch (selectedFinance) {
      case 'IncomeHead':
        return <IncomeHead/>
      case 'ExpenseHead':
        return <ExpenseHead/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderFinance()}
      </Grid>
    </Grid>
  )
}

export default FinanceContainer
