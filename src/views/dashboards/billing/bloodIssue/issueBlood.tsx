"use client"
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import { Typography } from '@mui/material'
import { flexbox } from '@mui/system'

const IssueBlood = () => {

  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
      <Box display="flex" justifyContent="space-between" mb={4}>
          <Box  mb={4}>
          <CustomTextField
                select
                fullWidth
                defaultValue=''
              >
              </CustomTextField>
            <Button variant='contained' color='primary'
             sx={{ mt: 4 }}
            href='/Patients/add-new-patient'
            startIcon={<Icon icon='tabler:plus' />}
            >
              Add Patient
            </Button>
            
          </Box>
          <CustomTextField
              value={value}
              placeholder='Prescription No'
              onChange={e => setValue(e.target.value)}
            />
        </Box>
        <Card>
          <CardContent>
          <Box sx={{display:'flex', flexWrap:'wrap', gap:2 }}>
            <CustomTextField fullWidth label='Issue Date' required sx={{ mb: 2 , width:'48%'}} />
            <CustomTextField
              select
              fullWidth
              label='Hospital Doctor'
              defaultValue=''
              sx={{ mb: 4  , width:'48%'}}
            >
              <MenuItem value='Doctor 1'>Doctor 1</MenuItem>
              <MenuItem value='Doctor 2'>Doctor 2</MenuItem>
              <MenuItem value='Doctor 3'>Doctor 3</MenuItem>
            </CustomTextField>
            <CustomTextField  fullWidth label='Reference Name' required sx={{ mb: 2  , width:'48%'}} />
            <CustomTextField fullWidth label='Technician' sx={{ mb: 2  , width:'48%'}} />
            <CustomTextField
              select
              fullWidth
              label='Blood Group'
              defaultValue=''
              sx={{ mb: 4 , width:'48%' }}
            >
              <MenuItem value='select'>select</MenuItem>
              <MenuItem value='B+'>B+</MenuItem>
              <MenuItem value='A+'>A+</MenuItem>
              <MenuItem value='AB+'>AB+</MenuItem>
              <MenuItem value='O+'>O+</MenuItem>
              <MenuItem value='B-'>B-</MenuItem>
              <MenuItem value='A-'>A-</MenuItem>
              <MenuItem value='AB-'>AB-</MenuItem>
              <MenuItem value='O-'>O-</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Bags'
              defaultValue=''
              sx={{ mb: 4 , width:'48%' }}
            >
              <MenuItem value='select'>select</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Charge Category'
              defaultValue=''
              sx={{ mb: 4 , width:'48%' }}
            >
              <MenuItem value='Pcked Blood Cell'>Pcked Blood Cell</MenuItem>
              <MenuItem value='Fresh Frozen Plasma'>Fresh Frozen Plasma</MenuItem>
              <MenuItem value='Cryoprecipitate'>Cryoprecipitate</MenuItem>
              <MenuItem value='Blood Suger Test'>Blood Suger Test</MenuItem>
              <MenuItem value='Other Charges'>Other Charges</MenuItem>
            </CustomTextField>
            
            <CustomTextField
              select
              fullWidth
              label='Charge Name'
              defaultValue=''
              sx={{ mb: 4 , width:'48%' }}
            >
            </CustomTextField>
            <CustomTextField  fullWidth label='Standard Charges ($)' required sx={{ mb: 2  , width:'48%'}} />
            </Box>
            <CustomTextField fullWidth label='Note' multiline required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Blood Qty' required sx={{ mb: 2 }} />
            <Box sx={{mb:4}}>
              <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                <Typography>Total</Typography><CustomTextField></CustomTextField> 
              </Box>
              <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                <Typography>Discount ($)</Typography>
                <CustomTextField defaultValue={'0%'} placeholder='0%' ></CustomTextField>
                <CustomTextField></CustomTextField> 
              </Box>
              <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                <Typography>Tax ($)</Typography>
                <CustomTextField defaultValue={'0%'} placeholder='Tax 0%' sx={{ml:8}}></CustomTextField>
                <CustomTextField></CustomTextField>
              </Box>
              <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                <Typography>Net Amount</Typography><CustomTextField></CustomTextField> 
              </Box>
              <Box sx={{display:'flex', justifyContent:'space-between', gap:2}}>
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
              </Box>
            </Box>
            
            <Box sx={{display:'flex', gap:2}}>
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              save
            </Button>
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              Save and Print
            </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default IssueBlood
