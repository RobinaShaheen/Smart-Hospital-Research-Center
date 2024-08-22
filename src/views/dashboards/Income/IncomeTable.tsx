import React from 'react'
import { Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material'

const incomeData = [
  {
    name: 'John Doe',
    invoiceNumber: 'INV-001',
    date: '08/10/2024',
    description: 'Consultation Fee',
    incomeHead: 'Consultation',
    amount: 150.0,
  },
  {
    name: 'Jane Smith',
    invoiceNumber: 'INV-002',
    date: '08/11/2024',
    description: 'Pharmacy Sales',
    incomeHead: 'Pharmacy',
    amount: 200.0,
  },
]

const IncomeTable = () => {
  
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <TextField
            variant='outlined'
            size='small'
            placeholder='Search by name or id..'
            sx={{ mr: 2, width: '300px' }}
          />
          <Button variant='contained' sx={{ alignSelf: 'flex-end' }} href='/Finance/Income/add-income'>
            Add Income
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Invoice Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Income Head</TableCell>
                <TableCell>Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incomeData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.invoiceNumber}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.incomeHead}</TableCell>
                  <TableCell>{row.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default IncomeTable
