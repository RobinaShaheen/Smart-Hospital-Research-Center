import React from 'react'
import Grid from '@mui/material/Grid'
import MedicinCategory from 'src/pages/setup/pharmacy/medicineCategory'
import Supplier from 'src/pages/setup/pharmacy/supplier'
import MedicineDosage from 'src/pages/setup/pharmacy/medicineDosage'
import DoseInterval from 'src/pages/setup/pharmacy/doseInterval'
import DoseDuration from 'src/pages/setup/pharmacy/doseDuration'
// import other setting components as needed

const PharmacyContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'medicineCategory':
        return <MedicinCategory />;
      case 'supplier':
        return <div><Supplier/></div>;
      case 'medicineDosage':
        return <div><MedicineDosage/></div>;
      case 'doseInterval':
        return <div><DoseInterval/></div>;
      case 'doseDuration':
        return <div><DoseDuration/></div>;
      // Add cases for other settings components
      default:
        return <div><MedicinCategory/></div>;
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

export default PharmacyContainer