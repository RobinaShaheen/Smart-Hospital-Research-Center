import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AppointmentSideBarProps from 'src/views/dashboards/setup/appointment/Appointment'
import AppointmentContainer from 'src/views/dashboards/setup/appointment/AppointmentContainer'

const Slot = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <AppointmentSideBarProps onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <AppointmentContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Slot.acl ={
  action: 'read',
  subject: 'acl-page'
}

export default Slot
