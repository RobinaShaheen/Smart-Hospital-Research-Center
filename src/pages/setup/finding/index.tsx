import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FindingSideBar from 'src/views/dashboards/setup/finding/Finding'
import FindingContainer from 'src/views/dashboards/setup/finding/FindingContainer'

const Pharmacy = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <FindingSideBar onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <FindingContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Pharmacy.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Pharmacy
