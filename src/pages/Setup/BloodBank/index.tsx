import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import BloodBankSideBar from 'src/views/dashboards/setup/bloodBank/bloodBank'
import BloodBankContanier from 'src/views/dashboards/setup/bloodBank/bloodBankContanier'

const Appointment = () => {
  const [selectedBloodBank, setSelectedBloodBank] = useState<string>('Products')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <BloodBankSideBar onSelectBloodBank={setSelectedBloodBank} />
        </Grid>
        <Grid item xs={9}>
          <BloodBankContanier selectedBloodBank={selectedBloodBank} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Appointment.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Appointment
