// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddCategory from 'src/views/dashboards/setup/finding/Category/AddCategory'

const Addfindings = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Finding Category
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddCategory />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Addfindings.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Addfindings