// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddTaxCategory from 'src/views/dashboards/setup/hospitalCharges/taxCategory/AddTaxCategory'

//import HospitalChargesContainer from 'src/views/dashboards/setup/hospitalCharges/HospitalChargesContainer'
const AddtaxCategory = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Tax Category 
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddTaxCategory />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

AddtaxCategory.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default AddtaxCategory