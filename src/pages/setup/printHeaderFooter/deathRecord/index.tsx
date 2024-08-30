// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DeathRecord from 'src/views/dashboards/setup/printHeaderFooter/DeathRecord'

//import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'
const deathRecord = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Death Record 
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <DeathRecord />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

deathRecord.acl = {
  action: 'read',
  subject: 'acl-page',
}

export default deathRecord