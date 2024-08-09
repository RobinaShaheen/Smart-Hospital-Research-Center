import React from 'react'
import { Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'

const referralData = [
  {
    referrerName: 'Dr. Smith',
    category: 'OPD',
    commission: '30.00%',
    referrerContact: '123-456-7890',
    contactPersonName: 'John Doe',
    contactPersonPhone: '098-765-4321',
    address: '123 Main St, Springfield'
  },
  {
    referrerName: 'Dr. Brown',
    category: 'IPD',
    commission: '20.00%',
    referrerContact: '987-654-3210',
    contactPersonName: 'Jane Doe',
    contactPersonPhone: '654-321-0987',
    address: '456 Elm St, Springfield'
  },
]

const ReferralPersonTable = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Button variant='contained' sx={{ mr: 2 }}href='/referral/add-person'>
              Add Referral Person
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Referrer Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Commission</TableCell>
                <TableCell>Referrer Contact</TableCell>
                <TableCell>Contact Person Name</TableCell>
                <TableCell>Contact Person Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referralData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.referrerName}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.commission}</TableCell>
                  <TableCell>{row.referrerContact}</TableCell>
                  <TableCell>{row.contactPersonName}</TableCell>
                  <TableCell>{row.contactPersonPhone}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
                      <Button variant='outlined'>Edit</Button>
                      <Button variant='outlined' color='error'>
                        Delete
                      </Button>
                    </Box>
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

export default ReferralPersonTable
