
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import RadiologyTable from 'src/views/dashboards/billing/radiologyBilling/radiologyTable'

const Certificate = () => {
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Radiology Billing
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12}>
            <RadiologyTable/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Certificate