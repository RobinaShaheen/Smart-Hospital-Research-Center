// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** Next Imports
import Link from 'next/link'
// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CertificateTable from 'src/views/dashboards/certificate/certificateTable'
import SelectCriteria from 'src/views/dashboards/certificate/selectCriteria'
import CertificateTemplate from 'src/views/dashboards/certificate/certificateTemplate'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CertificateTmplate = () => {
  return (
    <ApexChartWrapper>
        
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Certificate Template
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CertificateTemplate />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CertificateTmplate