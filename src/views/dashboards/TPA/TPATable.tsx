import React from 'react'
import { Box, Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tpaData = [
  {
    name: 'TPA Company A',
    code: 'TPA1001',
    phone: '123-456-7890',
    address: '123 Main St, Springfield',
    contactPersonName: 'John Doe',
    contactPersonPhone: '098-765-4321',
  },
  {
    name: 'TPA Company B',
    code: 'TPA1002',
    phone: '987-654-3210',
    address: '456 Elm St, Springfield',
    contactPersonName: 'Jane Doe',
    contactPersonPhone: '654-321-0987',
  },
]

const TPAManagementTable = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Button variant='contained' href='add-tpa'>Add TPA</Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact Person Name</TableCell>
                <TableCell>Contact Person Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tpaData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.contactPersonName}</TableCell>
                  <TableCell>{row.contactPersonPhone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default TPAManagementTable
