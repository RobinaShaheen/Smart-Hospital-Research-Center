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

const AddPatient = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button variant='contained' color='primary'
          href='/Patients/add-new-patient'
          >
            Add New Patient
          </Button>
        </Box>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Appointment Date' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Case' sx={{ mb: 2 }} />
            <CustomTextField
              select
              fullWidth
              label='Casualty'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='yes'>Yes</MenuItem>
              <MenuItem value='no'>No</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Old Patient'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='yes'>Yes</MenuItem>
              <MenuItem value='no'>No</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='TPA'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Insurance 1'>Insurance 1</MenuItem>
              <MenuItem value='Insurance 2'>Insurance 2</MenuItem>
              <MenuItem value='Insurance 3'>Insurance 3</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Reference' sx={{ mb: 2 }} />
            <CustomTextField
              select
              fullWidth
              label='Consultant Doctor'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Doctor 1'>Doctor 1</MenuItem>
              <MenuItem value='Doctor 2'>Doctor 2</MenuItem>
              <MenuItem value='Doctor 3'>Doctor 3</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Charge Category'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Category 1'>Category 1</MenuItem>
              <MenuItem value='Category 2'>Category 2</MenuItem>
              <MenuItem value='Category 3'>Category 3</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Charge' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Tax%' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Standard Charge ($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Applied Charge ($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Amount ($)' sx={{ mb: 2 }} />
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
            <CustomTextField fullWidth label='Paid Amount ($)' sx={{ mb: 2 }} />
            <OptionsWrapper>
              <InputLabel sx={{ cursor: 'pointer', lineHeight: 1.467 }} htmlFor='live-consultation'>
                Live Consultation
              </InputLabel>
              <Switch id='live-consultation' />
            </OptionsWrapper>
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              save
            </Button>
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              Save and Print
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddPatient
