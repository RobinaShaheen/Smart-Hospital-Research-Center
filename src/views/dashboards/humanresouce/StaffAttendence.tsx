import React, { useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import { SelectChangeEvent } from '@mui/material/Select'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

const roles = ['Doctor', 'Nurse', 'Technician', 'Other'] // Example roles

const StaffAttendance = () => {
  const [role, setRole] = useState<string>('')
  const [attendanceDate, setAttendanceDate] = useState<string>('')

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAttendanceDate(event.target.value)
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      

      <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='role'>Role</InputLabel>
          <Select
            id='role'
            value={role}
            onChange={handleRoleChange}
            input={<OutlinedInput label='Role' />}
          >
            <MenuItem value=''>Select</MenuItem>
            {roles.map(roleOption => (
              <MenuItem key={roleOption} value={roleOption}>
                {roleOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <TextField
          type='date'
          label='Attendance Date'
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={attendanceDate}
          onChange={handleDateChange}
          sx={{ minWidth: 200 }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' color='primary' startIcon={<Icon icon='tabler:search' />}>
          Search
        </Button>
      </Box>
    </Box>
  )
}

export default StaffAttendance
