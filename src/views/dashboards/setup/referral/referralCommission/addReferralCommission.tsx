
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
// "use client"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'

const AddReferralCommission = () => {
 
  return (
    <Grid  container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Category' required sx={{ mb: 2 }}>
                <MenuItem value=''>Select Category</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Standard Commission (%)' sx={{ mb: 2 }}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <label htmlFor="Commission For Modules *">Commission For Modules *</label>
                <Button variant='contained' sx={{ mr: 2 }}>
                    Apply To All
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <label htmlFor="OPD">OPD</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="IPD">IPD</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="Pharmacy">Pharmacy</label>
                <hr style={{ width: '30%', height: '2px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="Pathology">Pathology</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="Radiology">Radiology</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="Blood Bank">Blood Bank</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
                <label htmlFor="Ambulance">Ambulance</label>
                <hr style={{ width: '30%', height: '1px', backgroundColor: '#dcdcdc', border: 'none'}} />
            </Box>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
              <Button variant='contained' sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddReferralCommission
