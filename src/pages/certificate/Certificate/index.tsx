
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CertificateTable from 'src/views/dashboards/certificate/certificateTable'
import SelectCriteria from 'src/views/dashboards/certificate/selectCriteria'

// ** Icon Imports

const Certificate = () => {
  
  return (
    <ApexChartWrapper>  
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Certificate
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
            <SelectCriteria />
          <CertificateTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Certificate.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Certificate
