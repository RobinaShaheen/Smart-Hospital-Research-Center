import React, { useState } from 'react'
import { Box, Button, Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'

interface ExpenseData {
  expenseHead: string
  name: string
  invoiceNumber: string
  date: string
  amount: string
  description: string
  document: File | null
}

const AddExpense: React.FC = () => {
  const [expenseData, setExpenseData] = useState<ExpenseData>({
    expenseHead: '',
    name: '',
    invoiceNumber: '',
    date: '08/10/2024', // Default value
    amount: '',
    description: '',
    document: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setExpenseData({ ...expenseData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setExpenseData({ ...expenseData, document: e.target.files[0] })
    }
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(expenseData)
  }

  return (
    <Card>
      <CardContent>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            select
            label='Expense Head *'
            name='expenseHead'
            value={expenseData.expenseHead}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value='Office'>Office</MenuItem>
            <MenuItem value='Travel'>Travel</MenuItem>
            <MenuItem value='Supplies'>Supplies</MenuItem>
            {/* Add more options as needed */}
          </TextField>
          <TextField
            label='Name *'
            name='name'
            value={expenseData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label='Invoice Number'
            name='invoiceNumber'
            value={expenseData.invoiceNumber}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label='Date *'
            name='date'
            type='date'
            value={expenseData.date}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label='Amount ($) *'
            name='amount'
            type='number'
            value={expenseData.amount}
            onChange={handleChange}
            fullWidth
            required
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant='outlined' component='label'>
              Attach Document
              <input
                type='file'
                hidden
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant='body2'>
              {expenseData.document ? expenseData.document.name : 'No file chosen'}
            </Typography>
          </Box>
          <TextField
            label='Description'
            name='description'
            value={expenseData.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddExpense
