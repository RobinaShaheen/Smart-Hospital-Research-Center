import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import { UploadFile } from '@mui/icons-material'

// ** Icon Imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Icon from 'src/@core/components/icon'

const leaveTypes = ['Sick Leave', 'Vacation', 'Casual Leave'] // Example leave types

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState<string>('')
  const [leaveDate, setLeaveDate] = useState<string>('')
  const [reason, setReason] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)

  const handleLeaveTypeChange = (event: SelectChangeEvent<string>) => {
    setLeaveType(event.target.value)
  }

  const handleLeaveDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeaveDate(event.target.value)
  }

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitting leave application')
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Apply for Leave
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='leave-type'>Leave Type *</InputLabel>
          <Select
            id='leave-type'
            value={leaveType}
            onChange={handleLeaveTypeChange}
            input={<OutlinedInput label='Leave Type *' />}
          >
            <MenuItem value=''>Select</MenuItem>
            {leaveTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type='date'
          label='Leave Date *'
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={leaveDate}
          onChange={handleLeaveDateChange}
          sx={{ minWidth: 200 }}
        />

        <TextField
          label='Reason'
          variant='outlined'
          value={reason}
          onChange={handleReasonChange}
          sx={{ minWidth: 200 }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant='outlined'
            component='label'
            startIcon={<UploadFile />}
            sx={{ borderColor: file ? 'primary.main' : 'text.disabled' }}
          >
            Attach Document
            <input type='file' hidden onChange={handleFileChange} />
          </Button>
          <Typography>{file ? file.name : 'No file chosen'}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Submit Leave Application
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ApplyLeave
