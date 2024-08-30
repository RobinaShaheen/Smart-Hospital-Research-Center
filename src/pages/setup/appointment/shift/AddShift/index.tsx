
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddShift from 'src/views/dashboards/setup/appointment/shift/AddShift'

const Addshift = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Shift
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddShift />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Addshift.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Addshift