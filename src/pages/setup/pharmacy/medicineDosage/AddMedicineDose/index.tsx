// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddMedicineDose from 'src/views/dashboards/setup/pharmacy/medicineDoseage/AddMedicineDosage'

const AddmedicineDosage = () => { 
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Medicine Dose
      </Typography>
      <Grid container spacing={6}>
        <Grid></Grid>
        <Grid item xs={12}>
          <AddMedicineDose />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AddmedicineDosage