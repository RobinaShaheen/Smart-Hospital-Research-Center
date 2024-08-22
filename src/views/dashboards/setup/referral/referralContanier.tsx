import React from 'react'
import Grid from '@mui/material/Grid'
import ReferralCommission from './referralCommission/referralCommission'
import ReferralCategory from './referralCategory/referralCategory'

// import other setting components as needed

const ReferralContainer = ({ selectedReferral }: { selectedReferral: string }) => {
  const renderReferral = () => {
    switch (selectedReferral) {
      case 'ReferralCommission':
        return <ReferralCommission/>
      case 'ReferralCategory':
        return <ReferralCategory/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderReferral()}
      </Grid>
    </Grid>
  )
}

export default ReferralContainer
