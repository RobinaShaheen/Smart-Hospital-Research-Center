import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import { Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'

// ** Sample Data
const leaveRequests = [
  {
    staff: 'John Doe',
    leaveType: 'Sick Leave',
    leaveDate: '2024-08-01',
    days: 3,
    applyDate: '2024-07-25',
    status: 'Pending',
  },
  {
    staff: 'Jane Smith',
    leaveType: 'Vacation',
    leaveDate: '2024-08-15',
    days: 5,
    applyDate: '2024-07-30',
    status: 'Approved',
  },
]

const MyLeaves = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedLeave, setSelectedLeave] = useState<number | null>(null)

  const handleApplyLeave = () => {
    // Handle apply leave logic here
    console.log('Apply Leave')
  }

  const handleApproveLeave = () => {
    // Handle approve leave logic here
    console.log('Approve Leave')
  }

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Icon icon='tabler:plus' />}
            sx={{ mr: 2 }}
            onClick={handleApplyLeave}
            href='/human-resource/apply-leave/'
          >
            Apply Leave
          </Button>
          <Button
            variant='contained'
            color='success'
            startIcon={<Icon icon='tabler:check' />}
            onClick={handleApproveLeave}
            href='/human-resource/approve-leave-requests/'

          >
            Approve Leave Request
          </Button>
        </Box>
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
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title='View Details'>
                      <IconButton>
                        <Icon icon='tabler:eye' />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Cancel Request'>
                      <IconButton>
                        <Icon icon='tabler:x' />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MyLeaves
