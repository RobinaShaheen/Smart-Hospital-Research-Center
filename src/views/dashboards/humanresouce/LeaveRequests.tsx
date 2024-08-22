import React from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Icon from 'src/@core/components/icon'
const leaveRequests = [
  {
    staff: 'John Doe',
    leaveType: 'Sick Leave',
    leaveDate: '2024-08-09',
    days: 2,
    applyDate: '2024-08-07',
    status: 'Pending',
  },
  {
    staff: 'Jane Smith',
    leaveType: 'Vacation',
    leaveDate: '2024-08-15',
    days: 5,
    applyDate: '2024-08-05',
    status: 'Pending',
  },
]

const ApproveLeaveRequests = () => {
  const handleApprove = (index: number) => {
    console.log(`Approved leave request at index ${index}`)
  }

  const handleReject = (index: number) => {
    console.log(`Rejected leave request at index ${index}`)
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <Button variant='contained' color='primary' sx={{ mr: 2 }}
        href='/human-resource/add-leave'
        >
          Add Leave Request
        </Button>
      </Box>

     

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Staff</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Leave Date</TableCell>
              <TableCell>Days</TableCell>
              <TableCell>Apply Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request, index) => (
              <TableRow key={index}>
                <TableCell>{request.staff}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{request.leaveDate}</TableCell>
                <TableCell>{request.days}</TableCell>
                <TableCell>{request.applyDate}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    color='success'
                    size='small'
                    sx={{ mr: 1 }}
                    onClick={() => handleApprove(index)}
                    startIcon={<Icon icon='tabler:check' />}
                  >
                    Approve
                  </Button>
                  <Button
                    variant='outlined'
                    color='error'
                    size='small'
                    onClick={() => handleReject(index)}
                    startIcon={<Icon icon='tabler:x' />}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ApproveLeaveRequests
