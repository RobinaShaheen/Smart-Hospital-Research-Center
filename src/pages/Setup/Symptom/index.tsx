import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import SymptomsSideBar from 'src/views/dashboards/setup/symptoms/symptom'
import SymptomsContanier from 'src/views/dashboards/setup/symptoms/symptomContanier'
const Appointment = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string>('SymptomsHead')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <SymptomsSideBar onSelectSymptoms={setSelectedSymptoms} />
        </Grid>
        <Grid item xs={9}>
          <SymptomsContanier selectedSymptoms={selectedSymptoms} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
