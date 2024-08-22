import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] // Example months

const PayrollCard = () => {
  const [role, setRole] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string)
  }

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value as string)
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value)
  }

  return (
    
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Payroll
      </Typography>

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
        
        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='month'>Month</InputLabel>
          <Select
            id='month'
            value={month}
            onChange={handleMonthChange}
            input={<OutlinedInput label='Month' />}
          >
            <MenuItem value=''>Select</MenuItem>
            {months.map(monthOption => (
              <MenuItem key={monthOption} value={monthOption}>
                {monthOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <TextField
          type='number'
          label='Year'
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={year}
          onChange={handleYearChange}
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

export default PayrollCard
