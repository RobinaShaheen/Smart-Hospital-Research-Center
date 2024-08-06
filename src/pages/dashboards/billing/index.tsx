import React from 'react';
import Grid from '@mui/material/Grid';

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import CardStatsVertical2 from 'src/@core/components/card-statistics/card-stats-vertical2';

const BillingDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* Row 1 */}
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/public/images/card/Appointment.png'
            title='Appointment'
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/images/card/OPD.PNG'
            title='OPD'
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/images/card/pathology.PNG'
            title='Pathology'
            sx={{ height: '100%' }}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/images/card/Radiology.PNG'
            title='Radiology'
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/images/card/Blood issue.PNG'
            title='Blood Issue'
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <CardStatsVertical2
            imgSrc='/images/card/Blood issue component.PNG'
            title='Blood Component Issue'
            sx={{ height: '100%' }}
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default BillingDashboard;
