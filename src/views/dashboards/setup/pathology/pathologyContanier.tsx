import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import PathologyCategory from './pathologyCategory/pathologyCategory'
import Unit from './unit/unit'
import PathologyParameter from './pathologyParameter/pathologyParameter'
// import other setting components as needed

const PathologyContainer = ({ selectedPathology }: { selectedPathology: string }) => {
  const renderPathology = () => {
    switch (selectedPathology) {
      case 'PathologyCategory':
        return <PathologyCategory/>
      case 'Unit':
        return <Unit/>
      case 'PathologyParameter':
        return <PathologyParameter/>
      // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderPathology()}
      </Grid>
    </Grid>
  )
}

export default PathologyContainer
