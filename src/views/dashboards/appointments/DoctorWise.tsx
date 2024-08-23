
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const DoctorWiseAppointment = () => {
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')

  const handleSearch = () => {
    console.log('Doctor:', doctor)
    console.log('Date:', date)
  }

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  select
                  fullWidth
                  label='Doctor'
                  value={doctor}
                  onChange={e => setDoctor(e.target.value)}
                  sx={{ mb: 4 }}
                >
                  <MenuItem value='Doctor 1'>Doctor 1</MenuItem>
                  <MenuItem value='Doctor 2'>Doctor 2</MenuItem>
                  <MenuItem value='Doctor 3'>Doctor 3</MenuItem>
                </CustomTextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Date'
                  type='date'
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  sx={{ mb: 4 }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button variant='contained' color='primary' onClick={handleSearch}>
                Search
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DoctorWiseAppointment
