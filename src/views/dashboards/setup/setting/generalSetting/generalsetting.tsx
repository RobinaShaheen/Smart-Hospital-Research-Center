/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Image from 'next/image'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Link from 'next/link'

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
            <Box sx={{display: 'flex'}}>
            <CustomTextField fullWidth label='Hospital Name *' placeholder='Smart Hospital & Research Center' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Hospital Code' placeholder='ACT-487438' sx={{ mb: 2, ml: '6px'}}/>
            </Box>
            <CustomTextField fullWidth label='Address *' placeholder='25 Kings Street, CA' sx={{ mb: 2, mt: 4 }}/>
            <Box sx={{display: 'flex'}}>
            <CustomTextField fullWidth label='Phone *' placeholder='999999955555' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Email *' placeholder='smarthospitalre@gmail.com' sx={{ mb: 2, ml: '6px'}}/>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box sx={{display: 'flex'}}>
                <label htmlFor="Hospital Logo *">Hospital Logo *</label><br/>
                <Image src="/images/front_logo.png" width={150} height={25} alt='logo' style={{marginLeft: '50px'}}></Image>
              </Box>
              <Box sx={{display: 'flex'}}>
                <label htmlFor="Hospital Small Logo *" style={{marginLeft: '170px'}}>Hospital Small Logo *</label><br/>
                <Image src="/images/front_fav_icon.png" width={40} height={20} alt='logo' style={{marginLeft: '50px'}}></Image>
              </Box>
            </Box>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
            <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
              Languages
            </Typography>
            <Box sx={{display: 'flex', width: '100%'}}>
                <CustomTextField fullWidth select label='Languages *' sx={{ mb: 4, width: '50%'}}>
                    <MenuItem value=''>English</MenuItem>
                </CustomTextField>
              <Box sx={{display: 'flex', justifyItems: 'space-evenly', alignItems: 'center', ml: 20}}>
                <label htmlFor="Language RTL Text Mode">Language RTL Text Mode</label>
                <input type="radio" style={{marginLeft: '10px'}}/>Disabled
                <input type="radio" style={{marginLeft: '10px'}}/>Enabled
              </Box>
            </Box>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
            <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
                Date Time
            </Typography>
            <Box sx={{display: 'flex'}}>
              <CustomTextField fullWidth label='Date Format *' type='date' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='2024-10-08'/>
              <CustomTextField fullWidth label='Time Zone *' type='time' sx={{ mb: 2, ml: 6}} InputLabelProps={{ shrink: true }}>
                  <MenuItem value='(GMT+05:30) Asia, Kalkata'></MenuItem>
              </CustomTextField>
            </Box>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
            <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
              Currency
            </Typography>
            <Box sx={{display: 'flex'}}>
              <CustomTextField fullWidth label='Currency *' type='currency' sx={{ mb: 2, ml: 6}}>
                  <MenuItem value='INR'>INR</MenuItem>
              </CustomTextField>
              <CustomTextField fullWidth label='Currency Symbol *' placeholder='$' sx={{ mb: 2, ml:6}}/>
            </Box>
            <Box sx={{display: 'flex'}}>
              <CustomTextField fullWidth label='Credit Limit *' placeholder='20000' sx={{ mb: 2, ml: 6}}/>
              <CustomTextField fullWidth label='Time Format *' placeholder='12 Hour' sx={{ mb: 2, ml: 6 }}>
                <MenuItem value='24 Hour'>24 Hour</MenuItem>
              </CustomTextField>
            </Box>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
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
            <Box sx={{display: 'flex'}}>
              <CustomTextField fullWidth label='Mobile App Primary Color Code' placeholder='#424242' sx={{ mb: 4}}/>
              <CustomTextField fullWidth label='Mobile App Secondary Color Code' placeholder='#eeeeee' sx={{ mb: 4, ml: 6}}/>
            </Box>
            <label htmlFor="Mobile App Logo">Mobile App Logo</label>
            <Image src='/images/mobillogo.png' width={100} height={20} alt='Logo' style={{marginLeft: '40px'}}></Image>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
            <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
              Miscellaneous
            </Typography>
            <Box sx={{display: 'flex'}}>
              <Box>
                <label htmlFor="Doctor Restriction Mode">Doctor Restriction Mode</label>
                <input type="radio" style={{marginLeft: '20px'}}/>Disabled
                <input type="radio" style={{marginLeft: '20px'}}/>Enabled
              </Box>
              <Box sx={{ml: 40}}>
                <label htmlFor="SuperAdmin Visibility">SuperAdmin Visibility</label>
                <input type="radio" style={{marginLeft: '20px'}}/>Disabled
                <input type="radio" style={{marginLeft: '20px'}}/>Enabled <br/>
              </Box>
            </Box>
            <Box sx={{mt: 4}}>
              <label htmlFor="Patient Panel">Patient Panel</label>
              <input type="radio" style={{marginLeft: '96px'}}/>Disabled
              <input type="radio" style={{marginLeft: '20px'}}/>Enabled
            </Box>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc', border: 'none', marginTop: '20px'}} />
            <Typography
                  variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                  gutterBottom
                  sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
             Current Theme
            </Typography>
            <Box sx={{display: 'flex', cursor: 'pointer', justifyContent: 'space-between', gap: 4}}>
                <Image src='/images/i1.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i2.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i3.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i4.jpg' width={200} height={150} alt='Logo'></Image>
            </Box>
            <br/>
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

export default GeneralSetting
