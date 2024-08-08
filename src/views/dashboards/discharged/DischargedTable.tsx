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
    name: 'John Doe',
    patientId: 'PAT-001',
    caseId: 'CASE-001',
    gender: 'Male',
    phone: '123-456-7890',
    consultant: 'Dr. Smith',
    admissionDate: '2024-07-01',
    dischargedDate: '2024-07-15',
    tax: 50,
    netAmount: 500,
    total: 550
  },
  {
    id: 2,
    name: 'Alice Johnson',
    patientId: 'PAT-002',
    caseId: 'CASE-002',
    gender: 'Female',
    phone: '987-654-3210',
    consultant: 'Dr. Lee',
    admissionDate: '2024-06-20',
    dischargedDate: '2024-07-05',
    tax: 30,
    netAmount: 300,
    total: 330
  },
  {
    id: 3,
    name: 'Sam Brown',
    patientId: 'PAT-003',
    caseId: 'CASE-003',
    gender: 'Male',
    phone: '555-555-5555',
    consultant: 'Dr. Adams',
    admissionDate: '2024-08-01',
    dischargedDate: '2024-08-07',
    tax: 70,
    netAmount: 700,
    total: 770
  }
]

interface CellType {
  row: typeof dummyData[0]
}



const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'name',
    minWidth: 150,
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
    field: 'caseId',
    minWidth: 130,
    headerName: 'Case ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.caseId}</Typography>
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
    field: 'phone',
    minWidth: 130,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.phone}</Typography>
  },
  {
    flex: 0.15,
    field: 'consultant',
    minWidth: 150,
    headerName: 'Consultant',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.consultant}</Typography>
  },
  {
    flex: 0.15,
    field: 'admissionDate',
    minWidth: 120,
    headerName: 'Admission Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.admissionDate}</Typography>
  },
  {
    flex: 0.15,
    field: 'dischargedDate',
    minWidth: 120,
    headerName: 'Discharged Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.dischargedDate}</Typography>
  },
  {
    flex: 0.15,
    field: 'tax',
    minWidth: 100,
    headerName: 'Tax ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.tax}</Typography>
  },
  {
    flex: 0.15,
    field: 'netAmount',
    minWidth: 120,
    headerName: 'Net Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.netAmount}</Typography>
  },
  {
    flex: 0.15,
    field: 'total',
    minWidth: 120,
    headerName: 'Total ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.total}</Typography>
  }
]

const IPDDischargedPatientTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button
          component={Link}
          variant='contained'
          href='/apps/ipd/generate-bill'
          startIcon={<Icon icon='tabler:receipt' />}
        >
          Generate Bill
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/apps/ipd/medicines'
          startIcon={<Icon icon='tabler:medication' />}
        >
          Medicines
        </Button>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Patient'
            onChange={e => setValue(e.target.value)}
          />
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

export default IPDDischargedPatientTable
