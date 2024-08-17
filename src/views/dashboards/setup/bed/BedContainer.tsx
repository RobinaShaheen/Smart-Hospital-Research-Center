import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import BedStatus from './bedStatus/bedStatus'
// import other setting components as needed

const BedContainer = ({ selectedBed }: { selectedBed: string }) => {
  const renderBed = () => {
    switch (selectedBed) {
      case 'BedStatus':
        return <BedStatus/>
      // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderBed()}
      </Grid>
    </Grid>
  )
}

export default BedContainer
