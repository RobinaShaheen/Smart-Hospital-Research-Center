import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Typography from '@mui/material/Typography'
import OperationSideBar from 'src/views/dashboards/setup/operation/operation'
import OperationContainer from 'src/views/dashboards/setup/operation/operationContainer'

const Appointment = () => {
  const [selectedOperation, setSelectedOperation] = useState<string>('OperationCategory')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <OperationSideBar onSelectOperation={setSelectedOperation} />
        </Grid>
        <Grid item xs={9}>
          <OperationContainer selectedOperation={selectedOperation} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
