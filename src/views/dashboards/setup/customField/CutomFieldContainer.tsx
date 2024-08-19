import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
// import Findings from 'src/pages/setup/finding/finding'
import Category from 'src/pages/setup/finding/category'
import AddCustomField from 'src/pages/setup/customField/addCustomField.tsx'
// import other setting components as needed

const CustomFieldContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'customField':
        return <div></div>;
      case 'category':
        return <div><Category/></div>;
      // Add cases for other settings components
      default:
        return <div><AddCustomField/></div>;
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

export default CustomFieldContainer