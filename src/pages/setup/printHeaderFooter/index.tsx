import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import HeaderFooterSideBarProps from 'src/views/dashboards/setup/printHeaderFooter/printHeaderFooter'
import HeaderFooterContainer from 'src/views/dashboards/setup/printHeaderFooter/HeaderFooterContainer'

const PrintHeaderFooter = () => {
  const [selectedSetting, setSelectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <HeaderFooterSideBarProps onSelectSetting={setSelectedSetting} />
        </Grid>
        <Grid item xs={9}>
          <HeaderFooterContainer selectedSetting={selectedSetting} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default PrintHeaderFooter
