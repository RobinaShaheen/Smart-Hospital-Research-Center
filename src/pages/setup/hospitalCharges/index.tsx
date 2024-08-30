import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import HospitalChargesSideBar from 'src/views/dashboards/setup/hospitalCharges/hospitalCharges'
import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'

const Appointment = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('Charges')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <HospitalChargesSideBar onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <HospitalChargesContainer selectedSetting={selectedSetting} />
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
