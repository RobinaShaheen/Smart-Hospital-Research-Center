/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Link from 'next/link'


const MobilaApp = () => {
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
              Mobile App
            </Typography>
            <Button
                component={Link}
                variant='contained'
                href='/Setup/Setting/register-app'
            >
                Register Your Android App
            </Button>
            <CustomTextField fullWidth label='Mobile App Api URL' sx={{ mb: 4, mt: 4 }}/>
            <CustomTextField fullWidth label='Mobile App Primary Color Code' placeholder='#424242' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Mobile App Secondary Color Code' placeholder='#eeeeee' sx={{ mb: 4 }}/>
            <label htmlFor="Mobile App Logo">Mobile App Logo</label>
            <Image src='/images/mobillogo.png' width={100} height={20} alt='Logo'></Image>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default MobilaApp

