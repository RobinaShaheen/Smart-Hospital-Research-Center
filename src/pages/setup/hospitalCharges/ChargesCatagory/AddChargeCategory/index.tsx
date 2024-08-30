// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddChargesCategory from 'src/views/dashboards/setup/hospitalCharges/chargeCategory/AddChargeCategory'

//import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'
const ChargesCategory = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Charges Category
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddChargesCategory />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

ChargesCategory.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ChargesCategory