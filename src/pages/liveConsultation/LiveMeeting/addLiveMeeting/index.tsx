// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddLiveMeeting from 'src/views/dashboards/liveMeeting/addLiveMeeting'

const AddliveMeeting = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Live Meeting 
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <AddLiveMeeting />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

AddliveMeeting.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default AddliveMeeting