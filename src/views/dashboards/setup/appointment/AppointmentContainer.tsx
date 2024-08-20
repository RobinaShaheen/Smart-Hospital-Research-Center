import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Slot from 'src/pages/setup/appointment/slot'
import DoctorShift from 'src/pages/setup/appointment/doctorShift'
import Shift from 'src/pages/setup/appointment/shift'
// import other setting components as needed

const AppointmentContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'slot':
        return <Slot />;
      case 'doctorShift':
        return <div><DoctorShift/></div>;
      case 'shift':
        return <div><Shift/></div>;
        // Add cases for other settings components
      default:
        return <div><Slot/></div>;
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

export default AppointmentContainer