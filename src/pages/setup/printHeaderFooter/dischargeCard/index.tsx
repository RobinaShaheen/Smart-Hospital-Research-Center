// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DischargeCard from 'src/views/dashboards/setup/printHeaderFooter/DischargesCard'

//import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'
const dischargeCard = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Discharge Card 
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <DischargeCard />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

dischargeCard.acl = {
  action: 'read',
  subject: 'acl-page',
}

export default dischargeCard