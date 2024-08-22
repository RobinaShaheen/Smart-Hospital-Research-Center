
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'


const OPDPatientRegistration = () => {
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <Typography variant='body2' sx={{ mb: 1 }}>
            OPD Patient Registration
          </Typography>
            <CustomTextField fullWidth label='Subject' placeholder='OPD Patient' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Template Id  (This field required only for Indian SMS Gateway)' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Template' placeholder='Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}' sx={{ mb: 2 }}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default OPDPatientRegistration
