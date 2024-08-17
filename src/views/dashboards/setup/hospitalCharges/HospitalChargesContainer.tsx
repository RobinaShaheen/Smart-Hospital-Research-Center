import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Charges from 'src/pages/setup/hospitalCharges/Charges'
import ChargesCategory from 'src/pages/setup/hospitalCharges/ChargesCatagory'
import ChargeType from 'src/pages/setup/hospitalCharges/ChargesType'
import TaxCatagory from 'src/pages/setup/hospitalCharges/TaxCatagory'
import UnitTypeTable from 'src/pages/setup/hospitalCharges/UnitType'
// import other setting components as needed

const HospitalChargesContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'Charges':
        return <Charges />;
      case 'ChargesCatagory':
        return <div><ChargesCategory/></div>;
      case 'ChargesType':
        return <div><ChargeType/></div>;
      case 'TaxCatagory':
        return <div><TaxCatagory/></div>;
      case 'UnitType':
        return <div><UnitTypeTable/></div>;
      // Add cases for other settings components
      default:
        return <div><Charges/></div>;
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

export default HospitalChargesContainer