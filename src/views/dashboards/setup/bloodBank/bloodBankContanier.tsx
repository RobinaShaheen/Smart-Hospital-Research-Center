import React from 'react'
import Grid from '@mui/material/Grid'
import Products from './products/products'

// import other setting components as needed

const BloodBankContanier = ({ selectedBloodBank }: { selectedBloodBank: string }) => {
  const renderBloodBank = () => {
    switch (selectedBloodBank) {
      case 'Products':
        return <Products/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderBloodBank()}
      </Grid>
    </Grid>
  )
}

export default BloodBankContanier
