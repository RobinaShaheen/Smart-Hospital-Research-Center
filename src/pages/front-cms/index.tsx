// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FrontCMSTable from 'src/views/dashboards/frontcms/frontcmstable'

const Appointment = () => {
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Page List
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
            <FrontCMSTable/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
