
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
    name: 'Patient-001',
    patientId: 'App-001',
    guardianNumber: '2024-08-01',
    phone:'xxx-xxxxxxxxx',
    gender: 'male',
    consultant: 'Dr. 001',
    lastVisit: 'online',
    previousMedicalIssu: 'Normal',
    totalRecheckup: ''
  },
  {
    id: 2,
    name: 'Patient-002',
    patientId: 'App-002',
    guardianNumber: '2024-08-02',
    phone: 'xxx-xxxxxxxxx',
    gender: 'female',
    consultant: 'Dr.002',
    lastVisit: 'online',
    previousMedicalIssu: 'Normal',
    totalRecheckup: ''
  },
  {
    id: 3,
    name: 'Patient-003',
    patientId: 'App-003',
    guardianNumber: '2024-08-03',
    phone: 'xxx-xxxxxxxxx',
    gender: 'male',
    consultant: 'Dr. 003',
    lastVisit: 'online',
    previousMedicalIssu: 'Normal',
    totalRecheckup: ''
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
  },
  {
    flex: 0.2,
    field: 'patientId',
    minWidth: 130,
    headerName: 'Patient Id',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientId}</Typography>
  },
  {
    flex: 0.2,
    field: 'guardianNumber',
    minWidth: 130,
    headerName: 'Guarduian Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.guardianNumber}</Typography>
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
    field: 'consultant',
    minWidth: 150,
    headerName: 'Consultant',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.consultant}</Typography>
  },
  {
    flex: 0.15,
    field: 'lastVisit',
    minWidth: 120,
    headerName: 'Last Visit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.lastVisit}</Typography>
  },
  {
    flex: 0.15,
    field: 'previousMedicalIssu',
    minWidth: 120,
    headerName: 'Previous Medical Issue',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.previousMedicalIssu}</Typography>
  },
  {
    flex: 0.15,
    field: 'totalRecheckup',
    minWidth: 150,
    headerName: 'Total Recheckup',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.totalRecheckup}</Typography>
  }
]

const OpdBillingTable = () => {
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
          href='/billing/AddPatient'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Patient
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

export default OpdBillingTable
