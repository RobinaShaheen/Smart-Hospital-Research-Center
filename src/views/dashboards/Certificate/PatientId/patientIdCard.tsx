/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Icon from 'src/@core/components/icon'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import PatientList from './patientList'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const PatientIdCard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <Button
              component={Link}
              variant='contained'
              href='/Certificate/PatientIdCard'
              startIcon={<Icon icon='tabler:id' />}
              sx={{ mb: 4 }}
            >
              ID Card Template
            </Button>
            <CustomTextField fullWidth label='Patient' sx={{ mb: 4 }}>
                <MenuItem value=''>Select</MenuItem>
                {/* Add patient options here */}
            </CustomTextField>
            <CustomTextField fullWidth label='ID Card Template *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
              <PatientList/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PatientIdCard
