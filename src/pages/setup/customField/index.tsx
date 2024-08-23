import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
<<<<<<< HEAD

=======
>>>>>>> smart/updated
import CustomFieldContainer from 'src/views/dashboards/setup/customField/CutomFieldContainer'
import AccordionCustomized from 'src/views/dashboards/setup/customField/Accordion'

const Pharmacy = () => {
  const [selectedSetting] = useState<string>('GeneralSetting')

  return (
    <ApexChartWrapper>
      <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Grid item xs={7}>
            <CustomFieldContainer selectedSetting={selectedSetting} />
        </Grid>
        <Grid item xs={5}>
          <AccordionCustomized/>
        </Grid>
        
      </Grid>
    </ApexChartWrapper>
  )
}

export default Pharmacy
