import React from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AccordionCustomized from 'src/views/dashboards/message/accortion'

const Appointment = () => {

  return (
    <ApexChartWrapper>
      <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Grid item xs={12} >
          <AccordionCustomized/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Appointment.acl = {
  action: 'read',
  subject: 'acl-page',
}

export default Appointment
