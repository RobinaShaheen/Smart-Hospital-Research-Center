// ** MUI Import
import Grid from '@mui/material/Grid'
// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddLanguage from 'src/views/dashboards/setup/setting/language/addlanguage'
const Appointment = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
            <AddLanguage/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
