import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Typography from '@mui/material/Typography'
import RegisterAndroidApp from 'src/views/dashboards/setup/setting/generalSetting/addAndroidApp'

const Appointment = () => {
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
       >
        Register Your Android App Purchase Code
       </Typography>
       <RegisterAndroidApp/>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
