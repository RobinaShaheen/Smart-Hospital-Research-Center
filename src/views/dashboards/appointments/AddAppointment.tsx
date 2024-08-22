
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const AddAppointment = () => {
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button variant='contained' color='primary' sx={{ mr: 2 }}
          href='/appointment/add-new-patient'
          >
            Add New Patient
          </Button>
          
        </Box>
        <Card>
          <CardContent>
            <CustomTextField
              select
              fullWidth
              label='Doctor'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Doctor 1'>Doctor 1</MenuItem>
              <MenuItem value='Doctor 2'>Doctor 2</MenuItem>
              <MenuItem value='Doctor 3'>Doctor 3</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Doctor Fees' sx={{ mb: 2 }} />
            <CustomTextField
              select
              fullWidth
              label='Shift'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Morning'>Morning</MenuItem>
              <MenuItem value='Afternoon'>Afternoon</MenuItem>
              <MenuItem value='Evening'>Evening</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Appointment Date' type='date' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
            <CustomTextField
              select
              fullWidth
              label='Slot'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Slot 1'>Slot 1</MenuItem>
              <MenuItem value='Slot 2'>Slot 2</MenuItem>
              <MenuItem value='Slot 3'>Slot 3</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Appointment Priority'
              defaultValue='Normal'
              sx={{ mb: 4 }}
            >
              <MenuItem value='Urgent'>Urgent</MenuItem>
              <MenuItem value='Very Urgent'>Very Urgent</MenuItem>
              <MenuItem value='Normal'>Normal</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Payment Mode'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Cash'>Cash</MenuItem>
              <MenuItem value='Credit Card'>Credit Card</MenuItem>
              <MenuItem value='Debit Card'>Debit Card</MenuItem>
              <MenuItem value='Online Payment'>Online Payment</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Status'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Pending'>Pending</MenuItem>
              <MenuItem value='Confirmed'>Confirmed</MenuItem>
              <MenuItem value='Completed'>Completed</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Message' sx={{ mb: 2 }} />
            <OptionsWrapper>
              <InputLabel sx={{ cursor: 'pointer', lineHeight: 1.467 }} htmlFor='live-consultation'>
                Live Consultant (On Video Conference)
              </InputLabel>
              <Switch id='live-consultation' defaultChecked={false} />
            </OptionsWrapper>
            <CustomTextField fullWidth label='Alternate Address' sx={{ mb: 2 }} />
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              Add Appointment
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddAppointment
