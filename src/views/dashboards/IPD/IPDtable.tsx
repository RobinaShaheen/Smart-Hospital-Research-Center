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
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    ipdNo: 'IPD-001',
    caseId: 'CASE-001',
    name: 'John Doe',
    gender: 'Male',
    phone: '123-456-7890',
    consultant: 'Dr. Smith',
    bed: 'A101',
    previousMedicalIssue: 'Diabetes',
    creditLimit: 5000
  },
  {
    id: 2,
    ipdNo: 'IPD-002',
    caseId: 'CASE-002',
    name: 'Alice Johnson',
    gender: 'Female',
    phone: '987-654-3210',
    consultant: 'Dr. Lee',
    bed: 'B202',
    previousMedicalIssue: 'Hypertension',
    creditLimit: 3000
  },
  {
    id: 3,
    ipdNo: 'IPD-003',
    caseId: 'CASE-003',
    name: 'Sam Brown',
    gender: 'Male',
    phone: '555-555-5555',
    consultant: 'Dr. Adams',
    bed: 'C303',
    previousMedicalIssue: 'Asthma',
    creditLimit: 4000
  }
]

interface CellType {
  row: typeof dummyData[0]
}


const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'ipdNo',
    minWidth: 130,
    headerName: 'IPD No',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ipdNo}</Typography>
  },
  {
    flex: 0.2,
    field: 'caseId',
    minWidth: 130,
    headerName: 'Case ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.caseId}</Typography>
  },
  {
    flex: 0.2,
    field: 'name',
    minWidth: 150,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
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
    flex: 0.1,
    field: 'bed',
    minWidth: 80,
    headerName: 'Bed',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.bed}</Typography>
  },
  {
    flex: 0.2,
    field: 'previousMedicalIssue',
    minWidth: 180,
    headerName: 'Previous Medical Issue',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.previousMedicalIssue}</Typography>
  },
  {
    flex: 0.15,
    field: 'creditLimit',
    minWidth: 130,
    headerName: 'Credit Limit ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>${row.creditLimit || 0}</Typography>
  }
]

const IPDInPatientTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
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
          <Tooltip title='View Details'>
            <IconButton size='small' component={Link} href={`/apps/appointment/preview/${row.caseId}`}>
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Edit',
                href: `/apps/appointment/edit/${row.caseId}`,
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
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button
            component={Link}
            variant='contained'
            href='/Patients/add-patient'
            startIcon={<Icon icon='tabler:plus' />}
          >
            Add Patient
          </Button>
          <Button
            variant='contained'
            color='error'
            startIcon={<Icon icon='tabler:exit' />}
            href='/Patients/IPD/discharged'
          >
            Discharged Patients
          </Button>
        </Box>
        <CustomTextField
          value={value}
          placeholder='Search Patient'
          onChange={e => setValue(e.target.value)}
        />
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

export default IPDInPatientTable
