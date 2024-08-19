/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Languages from './languages'
import DateTime from './dateTime'
import MobilaApp from './mobileApp'
import Miscellaneous from './miscellenous'
import CurrentTheme from './currenttheme'


const GeneralSetting = () => {
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
            General Setting
            </Typography>
            <CustomTextField fullWidth label='Hospital Name *' placeholder='Smart Hospital & Research Center' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Hospital Code' placeholder='ACT-487438' sx={{ mb: 2, mt: 4 }}/>
            <CustomTextField fullWidth label='Address *' placeholder='25 Kings Street, CA' sx={{ mb: 2, mt: 4 }}/>
            <CustomTextField fullWidth label='Phone *' placeholder='999999955555' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Email *' placeholder='smarthospitalre@gmail.com' sx={{ mb: 2, mt: 4 }}/>
            <CustomTextField fullWidth label='Hospital Logo *' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Hospital Small Logo *' sx={{ mb: 2, mt: 4 }}/>
            <Languages/>
            <DateTime/>
            <MobilaApp/>
            <Miscellaneous/>
            <CurrentTheme/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default GeneralSetting
