import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FinanceSideBar from 'src/views/dashboards/setup/finance/finance'
import FinanceContainer from 'src/views/dashboards/setup/finance/financeContainer'
const Appointment = () => {
  const [selectedFinance, setSelectedFinance] = useState<string>('IncomeHead')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <FinanceSideBar onSelectFinance={setSelectedFinance} />
        </Grid>
        <Grid item xs={9}>
          <FinanceContainer selectedFinance={selectedFinance} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
