/* eslint-disable @typescript-eslint/no-unused-vars */

// ** React Imports
'use client'
import { useState } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//Dummy Data
const chargesTypes = ['select','OPD', 'IPD','Apponitment','PAthology','Radiology','Ambulance','Blood Bank','Operation','Other']

const AddChargesCategory = () => {
    const [value, setValue] = useState<string>('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <CustomTextField fullWidth select label='Charges Type' required>
              {chargesTypes.map(chargesType => (
              <MenuItem key={chargesType} value={chargesType}>
              {chargesType}
              </MenuItem>
              ))}
            </CustomTextField>
           
            <CustomTextField fullWidth label='Name' type='' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddChargesCategory