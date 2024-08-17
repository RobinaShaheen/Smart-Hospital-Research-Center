// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Bill from 'src/views/dashboards/setup/printHeaderFooter/Bill'

//import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'
const bill = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        IPD Bill 
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Bill />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default bill