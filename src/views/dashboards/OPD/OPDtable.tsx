
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
import OptionsMenu from 'src/@core/components/option-menu'
import CustomTextField from 'src/@core/components/mui/text-field'
import { ThemeColor } from 'src/@core/layouts/types'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    patientId: 'PAT-001',
    guardianName: 'Jane Doe',
    gender: 'Male',
    phone: '123-456-7890',
    consultant: 'Dr. Smith',
    lastVisit: '2023-07-15',
    totalRecheckups: 3
  },
  {
    id: 2,
    name: 'Alice Johnson',
    patientId: 'PAT-002',
    guardianName: 'Bob Johnson',
    gender: 'Female',
    phone: '987-654-3210',
    consultant: 'Dr. Lee',
    lastVisit: '2023-06-20',
    totalRecheckups: 2
  },
  {
    id: 3,
    name: 'Sam Brown',
    patientId: 'PAT-003',
    guardianName: 'Sarah Brown',
    gender: 'Male',
    phone: '555-555-5555',
    consultant: 'Dr. Adams',
    lastVisit: '2023-08-05',
    totalRecheckups: 1
  }
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface OPDStatusObj {
  [key: string]: {
    icon: string
    color: ThemeColor
  }
}

interface CellType {
  row: typeof dummyData[0]
}


// ** Vars

const defaultColumns: GridColDef[] = [
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
    headerName: 'Patient ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientId}</Typography>
  },
  {
    flex: 0.2,
    field: 'guardianName',
    minWidth: 150,
    headerName: 'Guardian Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.guardianName}</Typography>
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
    field: 'lastVisit',
    minWidth: 120,
    headerName: 'Last Visit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.lastVisit}</Typography>
  },
  {
    flex: 0.15,
    field: 'totalRecheckups',
    minWidth: 150,
    headerName: 'Total Recheckups',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.totalRecheckups}</Typography>
  }
]

const OPDOutPatientTable = () => {
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
            <IconButton size='small' component={Link} href={`/apps/appointment/preview/${row.patientId}`}>
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Edit',
                href: `/apps/appointment/edit/${row.patientId}`,
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
          href='/Patients/add-patient'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Patient
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

export default OPDOutPatientTable
