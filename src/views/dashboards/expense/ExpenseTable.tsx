import React from 'react'
import { Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material'

const expenseData = [
  {
    name: 'John Doe',
    invoiceNumber: 'EXP-001',
    date: '08/10/2024',
    description: 'Office Supplies',
    expenseHead: 'Office',
    amount: 75.00,
  },
  {
    name: 'Jane Smith',
    invoiceNumber: 'EXP-002',
    date: '08/11/2024',
    description: 'Travel Expenses',
    expenseHead: 'Travel',
    amount: 150.00,
  }
]

const ExpenseTable = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <TextField 
            variant='outlined' 
            placeholder='Search...' 
            size='small'
          />
          <Button variant='contained' sx={{ alignSelf: 'flex-end' }} href='/Finance/Expense/add-expense'>
            Add Expense
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
                <TableCell>Expense Head</TableCell>
                <TableCell>Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenseData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.invoiceNumber}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.expenseHead}</TableCell>
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

export default ExpenseTable
