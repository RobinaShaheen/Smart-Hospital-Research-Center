
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    staffId: 'STF-001',
    name: 'John Doe',
    role: 'Nurse',
    department: 'Cardiology',
    designation: 'Senior Nurse',
    mobileNumber: '+1 123 456 7890',
    address: 'Room 101, Cardiology Dept.',
    imageUrl: '/images/staff/john-doe.jpg'
  },
  {
    id: 2,
    staffId: 'STF-002',
    name: 'Alice Johnson',
    role: 'Doctor',
    department: 'Neurology',
    designation: 'Consultant',
    mobileNumber: '+1 234 567 8901',
    address: 'Room 202, Neurology Dept.',
    imageUrl: '/images/staff/alice-johnson.jpg'
  },
  {
    id: 3,
    staffId: 'STF-003',
    name: 'Sam Brown',
    role: 'Technician',
    department: 'Radiology',
    designation: 'Junior Technician',
    mobileNumber: '+1 345 678 9012',
    address: 'Room 303, Radiology Dept.',
    imageUrl: '/images/staff/sam-brown.jpg'
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'staffId',
    minWidth: 130,
    headerName: 'Staff ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.staffId}</Typography>
  },
  {
    flex: 0.3,
    field: 'name',
    minWidth: 150,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
  },
  {
    flex: 0.2,
    field: 'role',
    minWidth: 120,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.role}</Typography>
  },
  {
    flex: 0.2,
    field: 'department',
    minWidth: 150,
    headerName: 'Department',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.department}</Typography>
  },
  {
    flex: 0.2,
    field: 'designation',
    minWidth: 150,
    headerName: 'Designation',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.designation}</Typography>
  },
  {
    flex: 0.2,
    field: 'mobileNumber',
    minWidth: 150,
    headerName: 'Mobile Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.mobileNumber}</Typography>
  },
  {
    flex: 0.15,
    field: 'action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ }: CellType) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton component={Link} href='/staff/edit'>
          <Icon icon='tabler:edit' />
        </IconButton>
        <IconButton>
          <Icon icon='tabler:menu-2' />
        </IconButton>
      </Box>
    )
  }
]

const StaffDirectory = () => {
  // ** State
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table')
  const [searchValue, setSearchValue] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const handleRoleChange = (event: any) => {
    setRole(event.target.value)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === 'table' ? 'card' : 'table')
  }

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            variant='contained'
            href='/human-resource/add-staff'
            startIcon={<Icon icon='tabler:plus' />}
            sx={{ py: 2 }}
          >
            Add Staff
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomTextField
            value={searchValue}
            placeholder='Search Staff'
            onChange={e => setSearchValue(e.target.value)}
            sx={{ py: 2 }}
          />
          <FormControl variant='outlined' sx={{ minWidth: 200 }}>
            <InputLabel htmlFor='role'>Search by Role</InputLabel>
            <Select
              id='role'
              value={role}
              onChange={handleRoleChange}
              input={<OutlinedInput label='Search by Role' />}
              sx={{ py: 0 }}
            >
              <MenuItem value=''>All Roles</MenuItem>
              <MenuItem value='Doctor'>Doctor</MenuItem>
              <MenuItem value='Nurse'>Nurse</MenuItem>
              <MenuItem value='Technician'>Technician</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleMenuClick}
            variant='contained'
            startIcon={<Icon icon='tabler:menu-2' />}
            sx={{ py: 2 }}
          >
            Options
          </Button>
          <Button
            variant='contained'
            startIcon={<Icon icon={viewMode === 'table' ? 'tabler:view-cards' : 'tabler:view-list'} />}
            onClick={toggleViewMode}
            sx={{ py: 2 }}
          >
            {viewMode === 'table' ? 'Card View' : 'Table View'}
          </Button>
        </Box>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} href='/human-resource/attendance'>
            Staff Attendance
          </MenuItem>
          <MenuItem component={Link} href='/human-resource/payroll'>
            Payroll
          </MenuItem>
          <MenuItem component={Link} href='/human-resource/leaves'>
            Leaves
          </MenuItem>
        </Menu>
      </CardContent>

      {viewMode === 'table' ? (
        <DataGrid
          autoHeight
          rowHeight={54}
          rows={dummyData}
          columns={columns}
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          pageSizeOptions={[6, 10, 25, 50]}
          onPaginationModelChange={setPaginationModel}
        />
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', p: 4 }}>
          {dummyData.map(staff => (
            <Card key={staff.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image={staff.imageUrl}
                alt={`${staff.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {staff.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                {staff.role} | ID: {staff.staffId}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Mobile: {staff.mobileNumber}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Address: {staff.address}
                </Typography>
              </CardContent>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant='contained'
                  component={Link}
                  href='/staff/edit'
                  startIcon={<Icon icon='tabler:edit' />}
                >
                  Edit
                </Button>
                <IconButton>
                  <Icon icon='tabler:menu-2' />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Card>
  )
}

export default StaffDirectory
