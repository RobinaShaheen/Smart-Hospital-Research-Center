import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import SymptomsHead from './symptomhead/symptomsHead'
import SymptomsType from './symptomType/symptomType'

// import other setting components as needed

const SymptomsContanier = ({ selectedSymptoms }: { selectedSymptoms: string }) => {
  const renderSymptoms = () => {
    switch (selectedSymptoms) {
      case 'SymptomsHead':
        return <SymptomsHead/>
      case 'SymptomsType':
        return <SymptomsType/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderSymptoms()}
      </Grid>
    </Grid>
  )
}

export default SymptomsContanier
