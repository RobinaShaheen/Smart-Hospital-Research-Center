
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import BloodIssueTable from 'src/views/dashboards/billing/bloodIssue/bloodIssueTable'

const BloodIssue = () => {
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Blood Issue Billing
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12}>
            <BloodIssueTable/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

BloodIssue.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default BloodIssue