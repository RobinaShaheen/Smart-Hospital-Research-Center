import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import PharmacySideBar from 'src/views/dashboards/setup/pharmacy/Pharmacy'
import PharmacyContainer from 'src/views/dashboards/setup/pharmacy/PharmacyContainer'

const Pharmacy = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <PharmacySideBar onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <PharmacyContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Pharmacy.acl = {
  action: 'read',
  subject: 'acl-page',
}

export default Pharmacy
