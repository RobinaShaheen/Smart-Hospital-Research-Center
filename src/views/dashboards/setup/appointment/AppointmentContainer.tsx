import React from 'react'
import Grid from '@mui/material/Grid'
import Slot from 'src/pages/Setup/appointment/slot'
import DoctorShift from 'src/pages/Setup/appointment/doctorShift'
import Shift from 'src/pages/Setup/appointment/shift'

const AppointmentContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'slot':
        return <Slot />;
      case 'doctorShift':
        return <div><DoctorShift/></div>;
      case 'shift':
        return <div><Shift/></div>;
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