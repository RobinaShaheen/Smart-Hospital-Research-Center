import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import SettingSideBar from 'src/views/dashboards/setup/setting/setting'
import SettingContainer from 'src/views/dashboards/setup/setting/SettingContainer'
import Typography from '@mui/material/Typography'
import AppointmentCreated from 'src/views/dashboards/setup/setting/systemnotification/notification'

const Appointment = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
       >
        Edit Notification
       </Typography>
       <AppointmentCreated/>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
