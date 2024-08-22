import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Typography from '@mui/material/Typography'
import ReferralSideBar from 'src/views/dashboards/setup/referral/referral'
import ReferralContainer from 'src/views/dashboards/setup/referral/referralContanier'

const Appointment = () => {
  const [selectedReferral, setSelectedReferral] = useState<string>('ReferralCommission')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <ReferralSideBar onSelectReferral={setSelectedReferral} />
        </Grid>
        <Grid item xs={9}>
          <ReferralContainer selectedReferral={selectedReferral} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
