import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Typography from '@mui/material/Typography'
import PathologySideBar from 'src/views/dashboards/setup/pathology/pathology'
import PathologyContainer from 'src/views/dashboards/setup/pathology/pathologyContanier'

const Appointment = () => {
  const [selectedPathology, setSelectedPathology] = useState<string>('PathologyCategory')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <PathologySideBar onSelectPathology={setSelectedPathology} />
        </Grid>
        <Grid item xs={9}>
          <PathologyContainer selectedPathology={selectedPathology} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
