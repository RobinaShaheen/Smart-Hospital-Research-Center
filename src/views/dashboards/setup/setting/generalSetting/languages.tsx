/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'


const Languages = () => {
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
                Languages
          </Typography>
            <CustomTextField fullWidth label='Languages *' sx={{ mb: 4 }}>
                <MenuItem value=''>English</MenuItem>
            </CustomTextField>
            <label htmlFor="Language RTL Text Mode">Language RTL Text Mode</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Languages

