/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'

const categories = ['Syrup','Capsule','Tablet','Injection','Inhaler']
const doctors  = ['Checkbox','Color Picker','Date Picker','Date Time Picker','input']
const shifts = ['Ambulance Call','Appointment','Birth Record','Blood Issue','Component Issue','Death Recoed']
const charges = ['select']

const SlotList= () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box>
                <CustomTextField fullWidth select label='Doctor' required>
                    {doctors .map(doctor => (
                        <MenuItem key={doctor} value={doctor}>
                        {doctor}
                        </MenuItem>
                    ))}
                </CustomTextField>
                <CustomTextField fullWidth select label='Shift' required>
                {shifts.map(shift => (
                        <MenuItem key={shift} value={shift}>
                        {shift}
                        </MenuItem>
                    ))}
                </CustomTextField>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                    Search
                </Button>
                </Box>
            </Box>
            <Box>
                <CustomTextField fullWidth label='Consultation Duration' required sx={{ mb: 2 }}></CustomTextField>
                <CustomTextField fullWidth select label='Charge Category' required>
                    {categories .map(category => (
                        <MenuItem key={category} value={category}>
                        {category}
                        </MenuItem>
                    ))}
                </CustomTextField>
                <CustomTextField fullWidth select label='Charges' required>
                    {charges.map(charge => (
                        <MenuItem key={charge} value={charge}>
                        {charge}
                        </MenuItem>
                    ))}
                </CustomTextField>
            <CustomTextField fullWidth label='Amount' required sx={{mb:2}}></CustomTextField>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SlotList