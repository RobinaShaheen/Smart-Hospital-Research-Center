import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import SettingSideBar from 'src/views/dashboards/setup/setting/setting'
import SettingContainer from 'src/views/dashboards/setup/setting/SettingContainer'
import Typography from '@mui/material/Typography'

const Appointment = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <SettingSideBar onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <SettingContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
