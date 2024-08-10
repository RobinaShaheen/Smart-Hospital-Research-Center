import React, { useState } from 'react'
import { Box, Button, Card, CardContent, TextField, MenuItem, Typography, TextFieldProps } from '@mui/material'
import { DesktopDatePicker } from '@mui/lab'

// Define a type for the file state
type IncomeFormFile = File | null

const AddIncome: React.FC = () => {
  const [incomeHead, setIncomeHead] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [invoiceNumber, setInvoiceNumber] = useState<string>('')
  const [date, setDate] = useState<Date | null>(null)
  const [amount, setAmount] = useState<string>('')
  const [file, setFile] = useState<IncomeFormFile>(null)
  const [description, setDescription] = useState<string>('')

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null
    setFile(uploadedFile)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add Income
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            required
            select
            label="Income Head"
            value={incomeHead}
            onChange={(e) => setIncomeHead(e.target.value)}
            sx={{ mb: 3 }}
          >
            {/* Add your income head options here */}
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Pharmacy">Pharmacy</MenuItem>
            <MenuItem value="Lab Test">Lab Test</MenuItem>
          </TextField>

          <TextField
            fullWidth
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            sx={{ mb: 3 }}
          />

          <DesktopDatePicker
            label="Date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={(newDate: React.SetStateAction<Date | null>) => setDate(newDate)}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField fullWidth required {...params} sx={{ mb: 3 }} />}
          />

          <TextField
            fullWidth
            required
            type="number"
            label="Amount ($)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Attach Document
            </Typography>
            <Button variant="outlined" component="label">
              {file ? file.name : 'Drop a file here or click'}
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>
            {file && (
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {file.name}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            label="Description"
            multiline
            minRows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 3 }}
          />
        </Box>

        <Button variant="contained" color="primary">
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default AddIncome
