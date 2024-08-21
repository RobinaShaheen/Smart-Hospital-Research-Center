import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import HumanResourcesContainer from 'src/views/dashboards/setup/humanResources/HumanResourcesContainer'
import HumanResourcesSideBarProps from 'src/views/dashboards/setup/humanResources/HumanResource'

const Appointment = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <HumanResourcesSideBarProps onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <HumanResourcesContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
