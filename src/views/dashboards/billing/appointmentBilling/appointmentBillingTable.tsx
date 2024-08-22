
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
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    patientName: 'Patient-001',
    appointmentNumber: 'App-001',
    appointmentDate: '2024-08-01',
    phone:'xxx-xxxxxxxxx',
    gender: 'male',
    doctor: 'Dr. 001',
    source: 'online',
    prioirity: 'Normal',
    liveConsultation: ''
  },
  {
    id: 2,
    patientName: 'Patient-002',
    appointmentNumber: 'App-002',
    appointmentDate: '2024-08-02',
    phone: 'xxx-xxxxxxxxx',
    gender: 'female',
    doctor: 'Dr.002',
    source: 'online',
    prioirity: 'Normal',
    liveConsultation: ''
  },
  {
    id: 3,
    patientName: 'Patient-003',
    appointmentNumber: 'App-003',
    appointmentDate: '2024-08-03',
    phone: 'xxx-xxxxxxxxx',
    gender: 'male',
    doctor: 'Dr. 003',
    source: 'online',
    prioirity: 'Normal',
    liveConsultation: ''
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'patientName',
    minWidth: 130,
    headerName: 'Patient Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientName}</Typography>
  },
  {
    flex: 0.2,
    field: 'appointmentNumber',
    minWidth: 130,
    headerName: 'Appointment Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.appointmentNumber}</Typography>
  },
  {
    flex: 0.2,
    field: 'appointmentDate',
    minWidth: 130,
    headerName: 'Appointment Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.appointmentDate}</Typography>
  },
  {
    flex: 0.2,
    field: 'phone',
    minWidth: 150,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.phone}</Typography>
  },
  {
    flex: 0.2,
    field: 'gender',
    minWidth: 150,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.gender}</Typography>
  },
  {
    flex: 0.2,
    field: 'doctor',
    minWidth: 150,
    headerName: 'Doctor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.doctor}</Typography>
  },
  {
    flex: 0.15,
    field: 'source',
    minWidth: 120,
    headerName: 'Source',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.source}</Typography>
  },
  {
    flex: 0.15,
    field: 'prioirity',
    minWidth: 120,
    headerName: 'Priority',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.prioirity}</Typography>
  },
  {
    flex: 0.15,
    field: 'liveConsultation',
    minWidth: 150,
    headerName: 'Live Consultation',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.liveConsultation}</Typography>
  }
]

const AppointmentBillingTable = () => {
  
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
          />
        </Box>
        <Button
          component={Link}
          variant='contained'
          href='/billing/AddAppointment'
          startIcon={<Icon icon='tabler:receipt' />}
        >
          Add Appointment
        </Button>
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

export default AppointmentBillingTable
