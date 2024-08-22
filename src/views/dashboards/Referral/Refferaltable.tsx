
// ** React Imports
import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

// ** Sample Data
const referralData = [
  { name: 'John Doe', patientName: 'Jane Smith', billNo: '001', billAmount: 200, commissionPercentage: 5, commissionAmount: 10 },
  { name: 'Emily Johnson', patientName: 'Alice Brown', billNo: '002', billAmount: 300, commissionPercentage: 10, commissionAmount: 30 },
]

const ReferralTable = () => {

  return (
  
  <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Button
              variant='contained'
              color='primary'
              sx={{ mr: 1 }}
              href='/referral/payment'
            >
              Add Referral Payment
            </Button>
            
            <Button
              variant='contained'
              color='primary'
              href='/referral/person'
            >
                Referral Person
            </Button>
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Patient Name</TableCell>
                <TableCell>Bill No</TableCell>
                <TableCell>Bill Amount ($)</TableCell>
                <TableCell>Commission Percentage (%)</TableCell>
                <TableCell>Commission Amount ($)</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referralData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.patientName}</TableCell>
                  <TableCell>{row.billNo}</TableCell>
                  <TableCell>{row.billAmount}</TableCell>
                  <TableCell>{row.commissionPercentage}</TableCell>
                  <TableCell>{row.commissionAmount}</TableCell>
                  <TableCell>
                    <Button variant='outlined' color='primary'>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default ReferralTable
