
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
import { IconButton, Tooltip } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    PatientName: 'Manu(9)',
    Age: '1 Years 9 Months 3 days',
    Gender: 'Female',
    Phone: '',
    GuardianName: '',
    Address: '',
    Action : '',
  },
  {
    id: 2,
    PatientName: '',
    Age: '',
    Gender: '',
    Phone: '',
    GuardianName: '',
    Address: '',
    Action : '',
  },
  {
    id: 3,
    PatientName: '',
    Age: '',
    Gender: '',
    Phone: '',
    GuardianName: '',
    Address: '',
    Action : '',
  },
  {
    id: 4,
    PatientName: '',
    Age: '',
    Gender: '',
    Phone: '',
    GuardianName: '',
    Address: '',
    Action : '',
  }
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'PatientName',
    minWidth: 130,
    headerName: 'Patient Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.PatientName}</Typography>
  },
  {
    flex: 0.2,
    field: 'Age',
    minWidth: 130,
    headerName: 'Age',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Age}</Typography>
  },
  {
    flex: 0.2,
    field: 'Gender',
    minWidth: 130,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Gender}</Typography>
  },
  {
    flex: 0.2,
    field: 'Phone',
    minWidth: 150,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Phone}</Typography>
  },
  {
    flex: 0.2,
    field: 'GuardianName',
    minWidth: 150,
    headerName: 'Guardian Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.GuardianName}</Typography>
  },
  {
    flex: 0.2,
    field: 'Address',
    minWidth: 150,
    headerName: 'Address',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Address}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Show'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:menu-2'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  },
]


const DisablePatient = () => {
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
          href='/Setup/PatientSetup'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Patient List
        </Button>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
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

export default DisablePatient
