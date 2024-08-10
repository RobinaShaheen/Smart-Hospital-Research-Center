import React from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import NotificationBar from 'src/views/dashboards/analytics/HorizontalBar';
import IncomeExpenseCards from 'src/views/dashboards/analytics/IncomeExpenseCards';
import MonthlyIncomeOverview from 'src/views/dashboards/analytics/MonthlyIncome';
import YearlyIncomeExpense from 'src/views/dashboards/analytics/yearlyIncomeExpense';
import AppCalendar from 'src/pages/apps/calendar';
import RolesList from 'src/views/dashboards/analytics/RoleIcons';

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        {/* Notification Bar */}
        <Grid item xs={12} lg={6}>
          <NotificationBar />
        </Grid>
        {/* Income Expense Cards */}
        <Grid item xs={12} lg={6}>
          <IncomeExpenseCards />
        </Grid>
        {/* Monthly and Yearly Overview */}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <MonthlyIncomeOverview />
          </Grid>
          <Grid item xs={12} lg={6}>
            <YearlyIncomeExpense />
          </Grid>
        </Grid>

        {/* App Calendar with increased gap */}
        <Grid item xs={12} lg={6} sx={{ mt: 4 }}> {/* Added mt (margin-top) to increase gap */}
          <AppCalendar />
        </Grid>
        <Grid item xs={12} lg={6}>
          <RolesList />
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  );
};

export default AnalyticsDashboard;
