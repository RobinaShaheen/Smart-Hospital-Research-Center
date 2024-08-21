import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Findings from 'src/pages/setup/finding/finding'
import Category from 'src/pages/setup/finding/category'
// import other setting components as needed

const FindingContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'finding':
        return <Findings />;
      case 'category':
        return <div><Category/></div>;
      // Add cases for other settings components
      default:
        return <div><Findings/></div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={10} sx={{ml: 24}}>
        {renderSetting()}
      </Grid>
    </Grid>
  )
}

export default FindingContainer