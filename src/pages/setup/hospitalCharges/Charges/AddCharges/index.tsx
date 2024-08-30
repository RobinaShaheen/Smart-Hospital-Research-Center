
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddCharges from 'src/views/dashboards/setup/hospitalCharges/charges/addCharges'

const Addcharges = () => { 
  
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4'
        gutterBottom
        sx={{ mb: 4 }}
      >
        Add Charges 
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddCharges />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Addcharges.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Addcharges
