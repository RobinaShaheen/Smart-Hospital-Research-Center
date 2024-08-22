// ** React Imports
'use client'
import { useState } from 'react'
// ** Next Import
import Link from 'next/link'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomTextField from 'src/@core/components/mui/text-field'
import { ThemeColor } from 'src/@core/layouts/types'
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    appointmentNo: 'APPT-001',
    patientName: 'John Doe',
    appointmentDate: '2023-08-01',
    phone: '123-456-7890',
    gender: 'Male',
    doctor: 'Dr. Smith',
    source: 'Online',
    priority: 'High',
    liveConsultant: 'Yes',
    alternateAddress: '123 Main St, City, Country',
    fees: 100,
    status: 'Confirmed'
  },
  {
    id: 2,
    appointmentNo: 'APPT-002',
    patientName: 'Jane Roe',
    appointmentDate: '2023-08-02',
    phone: '987-654-3210',
    gender: 'Female',
    doctor: 'Dr. Johnson',
    source: 'Referral',
    priority: 'Medium',
    liveConsultant: 'No',
    alternateAddress: '456 Another St, City, Country',
    fees: 150,
    status: 'Pending'
  },
  {
    id: 3,
    appointmentNo: 'APPT-003',
    patientName: 'Sam Brown',
    appointmentDate: '2023-08-03',
    phone: '555-555-5555',
    gender: 'Male',
    doctor: 'Dr. Lee',
    source: 'Walk-in',
    priority: 'Low',
    liveConsultant: 'Yes',
    alternateAddress: '789 Another St, City, Country',
    fees: 200,
    status: 'Cancelled'
  }
]

interface AppointmentStatusObj {
  [key: string]: {
    icon: string
    color: ThemeColor
  }
}

interface CellType {
  row: typeof dummyData[0]
}

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize
}))

// ** Vars
const appointmentStatusObj: AppointmentStatusObj = {
  Confirmed: { color: 'success', icon: 'tabler:circle-check' },
  Pending: { color: 'warning', icon: 'tabler:circle-half-2' },
  Cancelled: { color: 'error', icon: 'tabler:alert-circle' }
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.15,
    field: 'appointmentNo',
    minWidth: 130,
    headerName: 'Appointment No',
    renderCell: ({ row }: CellType) => <LinkStyled href={`/apps/appointment/preview/${row.appointmentNo}`}>{`#${row.appointmentNo}`}</LinkStyled>
  },
  {
    flex: 0.2,
    field: 'patientName',
    minWidth: 120,
    headerName: 'Patient Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientName}</Typography>
  },
  {
    flex: 0.2,
    field: 'appointmentDate',
    minWidth: 120,
    headerName: 'Appointment Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.appointmentDate}</Typography>
  },
  {
    flex: 0.15,
    field: 'phone',
    minWidth: 130,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.phone}</Typography>
  },
  {
    flex: 0.1,
    field: 'gender',
    minWidth: 80,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.gender}</Typography>
  },
  {
    flex: 0.15,
    field: 'doctor',
    minWidth: 120,
    headerName: 'Doctor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.doctor}</Typography>
  },
  {
    flex: 0.15,
    field: 'source',
    minWidth: 100,
    headerName: 'Source',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.source}</Typography>
  },
  {
    flex: 0.1,
    field: 'priority',
    minWidth: 80,
    headerName: 'Priority',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.priority}</Typography>
  },
  {
    flex: 0.15,
    field: 'liveConsultant',
    minWidth: 120,
    headerName: 'Live Consultant',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.liveConsultant}</Typography>
  },
  {
    flex: 0.2,
    field: 'alternateAddress',
    minWidth: 150,
    headerName: 'Alternate Address',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.alternateAddress}</Typography>
  },
  {
    flex: 0.1,
    field: 'fees',
    minWidth: 80,
    headerName: 'Fees',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>${row.fees || 0}</Typography>
  },
  {
    flex: 0.15,
    field: 'status',
    minWidth: 100,
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      const color = appointmentStatusObj[row.status] ? appointmentStatusObj[row.status].color : 'primary'

      return (
        <Tooltip
          title={
            <>
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                {row.status}
              </Typography>
            </>
          }
        >
          <CustomAvatar skin='light' color={color} sx={{ width: 30, height: 30 }}>
            <Icon icon={appointmentStatusObj[row.status].icon} fontSize='1rem' />
          </CustomAvatar>
        </Tooltip>
      )
    }
  }
]

const AppointmentTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [statusValue, setStatusValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns: GridColDef[] = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 130,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Appointment'>
            <IconButton size='small' onClick={() => console.log('Delete', row.appointmentNo)}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton size='small' component={Link} href={`/apps/appointment/preview/${row.appointmentNo}`}>
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Edit',
                href: `/apps/appointment/edit/${row.appointmentNo}`,
                icon: <Icon icon='tabler:pencil' fontSize='1.25rem' />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize='1.25rem' />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button
          component={Link}
          variant='contained'
          href='/appointment/add'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Create Appointment
        </Button>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Appointment'
            onChange={e => setValue(e.target.value)}
          />
          <CustomTextField
            select
            sx={{ pr: 4, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '8rem !important' } }}
            SelectProps={{
              displayEmpty: true,
              value: statusValue,
              onChange: e => setStatusValue(e.target.value as string)
            }}
          >
            <MenuItem value=''>Select Status</MenuItem>
            <MenuItem value='confirmed'>Confirmed</MenuItem>
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='cancelled'>Cancelled</MenuItem>
          </CustomTextField>
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Icon icon='tabler:doctor' />}
            href='/appointment/doctor-wise'
          >
            Doctor Wise
          </Button>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Icon icon='tabler:queue' />}
            href='/appointment/queue'
          >
            Queue
          </Button>
        </Box>
      </CardContent>
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
    </Card>
  )
}

export default AppointmentTable
