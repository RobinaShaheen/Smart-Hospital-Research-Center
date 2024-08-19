/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const Miscellaneous = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
                Miscellaneous
          </Typography>
            <label htmlFor="Doctor Restriction Mode">Doctor Restriction Mode</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled <br/>
            <label htmlFor="SuperAdmin Visibility">SuperAdmin Visibility</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled <br/>
            <label htmlFor="Patient Panel">Patient Panel</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Miscellaneous

