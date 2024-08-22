import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ImportStaff = () => {

  // ** State
  const [role, setRole] = useState<string>('')
  const [designation, setDesignation] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  const handleRoleChange = (event: any) => {
    setRole(event.target.value)
  }

  const handleDesignationChange = (event: any) => {
    setDesignation(event.target.value)
  }

  const handleDepartmentChange = (event: any) => {
    setDepartment(event.target.value)
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Button
            variant='contained'
            startIcon={<Icon icon='tabler:download' />}
            sx={{ alignSelf: 'flex-start' }}
          >
            Download Sample File
          </Button>
        </Box>
        
        <Typography sx={{ mb: 4 }}>
          1. Your CSV data should be in the format below. The first line of your CSV file should be the column headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding problems.
          <br />
          2. If the column you are trying to import is date make sure that is formatted in format Y-m-d (2018-06-06).
        </Typography>
        
        <Box component="div" sx={{ mb: 4, whiteSpace: 'pre' }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Staff ID* | First Name* | Last Name | Father Name | Mother Name | Email* | Gender* | Date Of Birth* | Date Of Joining | Phone | Emergency Contact Number | Marital Status | Current Address | Permanent Address | Qualification | Work Experience | Note
          </Typography>
          <Typography variant="body2">
            XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ | XYZ
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
          <FormControl variant='outlined' sx={{ minWidth: 200 }}>
            <InputLabel htmlFor='role'>Role *</InputLabel>
            <Select
              id='role'
              value={role}
              onChange={handleRoleChange}
              input={<OutlinedInput label='Role *' />}
            >
              <MenuItem value=''>Select</MenuItem>
              <MenuItem value='Doctor'>Doctor</MenuItem>
              <MenuItem value='Nurse'>Nurse</MenuItem>
              <MenuItem value='Technician'>Technician</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant='outlined' sx={{ minWidth: 200 }}>
            <InputLabel htmlFor='designation'>Designation</InputLabel>
            <Select
              id='designation'
              value={designation}
              onChange={handleDesignationChange}
              input={<OutlinedInput label='Designation' />}
            >
              <MenuItem value=''>Select</MenuItem>
              <MenuItem value='Senior Doctor'>Senior Doctor</MenuItem>
              <MenuItem value='Junior Nurse'>Junior Nurse</MenuItem>
              <MenuItem value='Lab Technician'>Lab Technician</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant='outlined' sx={{ minWidth: 200 }}>
            <InputLabel htmlFor='department'>Department</InputLabel>
            <Select
              id='department'
              value={department}
              onChange={handleDepartmentChange}
              input={<OutlinedInput label='Department' />}
            >
              <MenuItem value=''>Select</MenuItem>
              <MenuItem value='Cardiology'>Cardiology</MenuItem>
              <MenuItem value='Neurology'>Neurology</MenuItem>
              <MenuItem value='Radiology'>Radiology</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button variant='contained' component='label' startIcon={<Icon icon='tabler:upload' />}>
            Select CSV File *
            <input type='file' hidden />
          </Button>
          <Typography sx={{ ml: 2 }}>No file chosen</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary'>
            Import Staff
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ImportStaff
