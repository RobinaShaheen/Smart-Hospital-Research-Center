import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FrontOfficeSideBar from 'src/views/dashboards/setup/frontOffice/frontoffice'
import FrontOfficeContainer from 'src/views/dashboards/setup/frontOffice/frontOfficeContainer'
const Appointment = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>('Purpose')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <FrontOfficeSideBar onSelectFrontOffice={setSelectedOffice} />
        </Grid>
        <Grid item xs={9}>
          <FrontOfficeContainer selectedOffice={selectedOffice} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
