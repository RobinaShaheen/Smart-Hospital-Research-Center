
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'

const SEODetail = () => {
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
            SEO Detail
            </Typography>
            <CustomTextField fullWidth label='Meta Title' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Meta KeyWords' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Meta Description' sx={{ mb: 2 }}/>
           </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SEODetail
