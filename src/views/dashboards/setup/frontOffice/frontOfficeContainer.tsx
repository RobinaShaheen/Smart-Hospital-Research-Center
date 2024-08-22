import React from 'react'
import Grid from '@mui/material/Grid'
import Purpose from './purpose/purpose'
import ComplainType from './complainType/complainType'
import Source from './source/source'
import AppointmentPriority from './appointmentPriority/appointmentPriority'

// import other setting components as needed

const FrontOfficeContainer = ({ selectedOffice }: { selectedOffice: string }) => {
  const renderOffice = () => {
    switch (selectedOffice) {
      case 'Purpose':
        return <Purpose/>
      case 'ComplainType':
        return <ComplainType/>
      case 'Source':
        return <Source/>
      case 'AppointmentPriority':
        return <AppointmentPriority/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderOffice()}
      </Grid>
    </Grid>
  )
}

export default FrontOfficeContainer
