
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import ShiftTable from 'src/views/dashboards/setup/appointment/shift/shiftTable'

const Shift = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Shift
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <ShiftTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Shift.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Shift