// ** React Imports
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

// ** Sample Data
const patientTypes = ['Inpatient', 'Outpatient']
const payees = ['Doctor', 'Nurse', 'Technician'] // Example payees

const ReferralPayment = () => {
  const [patientType, setPatientType] = useState<string>('')
  const [billNo, setBillNo] = useState<string>('')
  const [billAmount, setBillAmount] = useState<number | ''>('')
  const [payee, setPayee] = useState<string>('')
  const [commissionAmount, setCommissionAmount] = useState<number | ''>('')

  const handlePatientTypeChange = (event: SelectChangeEvent<string>) => {
    setPatientType(event.target.value as string)
  }

  const handleBillNoChange = (event: SelectChangeEvent<string>) => {
    setBillNo(event.target.value as string)
  }

  const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setBillAmount(value === '' ? '' : Number(value))
  }

  const handlePayeeChange = (event: SelectChangeEvent<string>) => {
    setPayee(event.target.value as string)
  }


  const handleCommissionAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCommissionAmount(value === '' ? '' : Number(value))
  }

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving referral payment')
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Referral Payment
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='patient-type'>Patient Type *</InputLabel>
          <Select
            id='patient-type'
            value={patientType}
            onChange={handlePatientTypeChange}
            input={<OutlinedInput label='Patient Type *' />}
          >
            <MenuItem value=''>Select Type</MenuItem>
            {patientTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='bill-no'>Bill No/Case Id *</InputLabel>
          <Select
            id='bill-no'
            value={billNo}
            onChange={handleBillNoChange}
            input={<OutlinedInput label='Bill No/Case Id *' />}
          >
            <MenuItem value=''>Select</MenuItem>
            {/* Add bill numbers or case IDs as options here */}
            <MenuItem value='001'>001</MenuItem>
            <MenuItem value='002'>002</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label='Patient Bill Amount ($) *'
          variant='outlined'
          type='number'
          value={billAmount === '' ? '' : billAmount}
          onChange={handleBillAmountChange}
          required
          sx={{ minWidth: 200 }}
        />

        <FormControl variant='outlined' sx={{ minWidth: 200 }}>
          <InputLabel htmlFor='payee'>Payee *</InputLabel>
          <Select
            id='payee'
            value={payee}
            onChange={handlePayeeChange}
            input={<OutlinedInput label='Payee *' />}
          >
            <MenuItem value=''>Select Payee</MenuItem>
            {payees.map(payeeOption => (
              <MenuItem key={payeeOption} value={payeeOption}>
                {payeeOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label='Commission Percentage (%) *'
          variant='outlined'
          type='number'
          onChange={handleCommissionAmountChange}
          required
          sx={{ minWidth: 200 }}
        />

        <TextField
          label='Commission Amount ($) *'
          variant='outlined'
          type='number'
          value={commissionAmount === '' ? '' : commissionAmount}
          onChange={handleCommissionAmountChange}
          required
          sx={{ minWidth: 200 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ReferralPayment
