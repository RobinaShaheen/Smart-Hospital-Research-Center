import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsVertical2 from 'src/@core/components/card-statistics/card-stats-vertical2'

const BillingDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    // Add logic to handle the search button click here
    console.log('Searching for:', searchTerm)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* Cards Section */}
        <Grid item xs={12} sm={8} lg={8}>
          <Grid container spacing={6}>
            {/* Row 1 */}
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/Appointment.PNG'
                title='Appointment'
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/OPD.PNG'
                title='OPD'
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/Pathology.PNG'
                title='Pathology'
                sx={{ height: '100%' }}
              />
            </Grid>
            {/* Row 2 */}
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/Radiology.PNG'
                title='Radiology'
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/Blood issue.PNG'
                title='Blood Issue'
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <CardStatsVertical2
                imgSrc='/images/cards/blood issue component.PNG'
                title='Blood Component Issue'
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Container */}
        <Grid item xs={12} sm={4} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant='h6' gutterBottom>
              OPD/IPD Billing Through Case Id
            </Typography>
            <hr/>
            <Box display='flex' alignItems='center' gap={2}>
              <Typography variant='body1'>Case ID:</Typography>
              <TextField
                fullWidth
                variant='outlined'
                placeholder='Enter Case ID'
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{
                  flex: 1,
                  '& .MuiInputBase-input': {
                    py: 2  // Adjust the vertical padding here
                  }
                }}
              />
              <Button
                variant='contained'
                color='primary'
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </Box>
            {/* Add additional content or components here */}
          </Paper>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default BillingDashboard
