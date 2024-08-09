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

const roles = ['Doctor', 'Nurse', 'Technician', 'Other'] // Example roles
const names = ['John Doe', 'Jane Smith', 'Alice Johnson'] // Example names
const leaveTypes = ['Sick Leave', 'Vacation', 'Casual Leave'] // Example leave types
const statuses = ['Pending', 'Approved', 'Disapproved'] // Example statuses

const AddLeave = () => {
  const [role, setRole] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [applyDate, setApplyDate] = useState<string>('08/09/2024')
  const [leaveType, setLeaveType] = useState<string>('')
  const [leaveDate, setLeaveDate] = useState<string>('')
  const [reason, setReason] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string>('Pending')

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string)
  }

  const handleNameChange = (event: SelectChangeEvent<string>) => {
    setName(event.target.value as string)
  }

  const handleApplyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApplyDate(event.target.value)
  }

  const handleLeaveTypeChange = (event: SelectChangeEvent<string>) => {
    setLeaveType(event.target.value as string)
  }

  const handleLeaveDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeaveDate(event.target.value)
  }

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value)
  }

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value as string)
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitting leave request')
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='role'>Role *</InputLabel>
          <Select
            id='role'
            value={role}
            onChange={handleRoleChange}
            input={<OutlinedInput label='Role *' />}
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
          <InputLabel htmlFor='name'>Name *</InputLabel>
          <Select
            id='name'
            value={name}
            onChange={handleNameChange}
            input={<OutlinedInput label='Name *' />}
          >
            <MenuItem value=''>Select</MenuItem>
            {names.map(nameOption => (
              <MenuItem key={nameOption} value={nameOption}>
                {nameOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type='date'
          label='Apply Date'
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={applyDate}
          onChange={handleApplyDateChange}
          sx={{ minWidth: 200 }}
        />

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

        <TextField
          label='Note'
          variant='outlined'
          value={note}
          onChange={handleNoteChange}
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

        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='status'>Status</InputLabel>
          <Select
            id='status'
            value={status}
            onChange={handleStatusChange}
            input={<OutlinedInput label='Status' />}
          >
            {statuses.map(statusOption => (
              <MenuItem key={statusOption} value={statusOption}>
                {statusOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AddLeave
