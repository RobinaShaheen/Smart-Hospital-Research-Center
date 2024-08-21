/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

const RegisterAndroidApp = () => {
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
            Register Your Android App Purchase Code
            </Typography>
            <CustomTextField fullWidth label='Envato Market Purchase Code For Smart Hospital Android App ( How to find it? )' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Your Email Registered With Envato' sx={{ mb: 2, ml: '6px'}}/>
            <Button
                component={Link}
                variant='contained'
                href='/Setup/Setting'
            >
                Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default RegisterAndroidApp
