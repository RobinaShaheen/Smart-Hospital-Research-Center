'use client'
import { useState } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'


// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const AddPatient = () => {
  const [value, setValue] = useState<string>('')

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

            {/* <Box sx={{display:'flex', flex: 'wrap'}}> */}
            <CustomTextField
                select
                fullWidth
                label='Test Name'
                required
                defaultValue=''
                sx={{ mb: 4 }}
              >
                <MenuItem value='select'>select</MenuItem>
                <MenuItem value='appendicitis'>Appendicitis(Appendictis)</MenuItem>
                <MenuItem value='chestXrays'>Chest X rays</MenuItem>
                <MenuItem value='breastUltrasound'>Breast Ultrasound(BU)</MenuItem>
                <MenuItem value='vascularSonography'>Vascular Sonography</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Report Days' disabled sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Report Date' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Tax%' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Amount ($)' sx={{ mb: 2 }} />
            
            <Button fullWidth variant='contained' sx={{ mt: 7  }} >
              Add
            </Button>
            <CustomTextField
              select
              fullWidth
              label='Referal Doctor'
              defaultValue=''
              sx={{ mb: 4, mt:4}}
            >
              <MenuItem value='doc-001'>DOC-001</MenuItem>
              <MenuItem value='doc-002'>DOC-002</MenuItem>
              <MenuItem value='doc-001'>DOC-003</MenuItem>
              <MenuItem value='doc-002'>DOC-004</MenuItem>
            </CustomTextField>
            
            <CustomTextField fullWidth label='Doctor Name' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Note' multiline sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Previous Report Value' sx={{ mb: 2 }} />
            <Box>
            <CustomTextField fullWidth label='Total($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Discount($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Tax ($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Net Amount ($)' sx={{ mb: 2 }} />
            </Box>
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
            <CustomTextField fullWidth label='Amount ($)' sx={{ mb: 2 }} />
            
            <Button fullWidth variant='contained' sx={{ mt: 4 }}
            startIcon={<Icon icon='tabler:claculate' />}
            >
              claculate
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddPatient
