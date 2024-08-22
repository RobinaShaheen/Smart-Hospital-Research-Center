/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
'use client'
import { useState } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
const PatientQueue = () => {
  const [doctor, setDoctor] = useState('')
  const [shift, setShift] = useState('')
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')

  const handleSearch = () => {
    console.log('Doctor:', doctor)
    console.log('Shift:', shift)
    console.log('Date:', date)
    console.log('Slot:', slot)
  }

  const handleReorder = () => {
    console.log('Reorder Queue')
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
                  select
                  fullWidth
                  label='Shift'
                  value={shift}
                  onChange={e => setShift(e.target.value)}
                  sx={{ mb: 4 }}
                >
                  <MenuItem value='Morning'>Morning</MenuItem>
                  <MenuItem value='Afternoon'>Afternoon</MenuItem>
                  <MenuItem value='Evening'>Evening</MenuItem>
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
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  select
                  fullWidth
                  label='Slot'
                  value={slot}
                  onChange={e => setSlot(e.target.value)}
                  sx={{ mb: 4 }}
                >
                  <MenuItem value='Slot 1'>Slot 1</MenuItem>
                  <MenuItem value='Slot 2'>Slot 2</MenuItem>
                  <MenuItem value='Slot 3'>Slot 3</MenuItem>
                </CustomTextField>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button variant='contained' color='primary' onClick={handleReorder}>
                Reorder Queue
              </Button>
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

export default PatientQueue
