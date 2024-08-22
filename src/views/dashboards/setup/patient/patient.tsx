
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
import { DataGrid, GridColDef, GridRowHeightParams, GridRowHeightReturnValue } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, Tooltip } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    PatientName: 'Olivier Thomas',
    Age: '39 Years 3 Months 13 days',
    Gender: 'Male',
    Phone: '789645320',
    GuardianName: 'Edward Thomas',
    Address: '48 kingsway, Brooklyn West, CA',
    Dead: 'No',
    Action : '',
  },
  {
    id: 2,
    PatientName: 'John Marchall',
    Age: '30 Years 5 Months 10 days',
    Gender: 'Male',
    Phone: '7867445330',
    GuardianName: 'Smith Marshall',
    Address: 'Blackstone Park, Brooklyn North, CA',
    Dead: 'No',
    Action : '',
  },
  {
    id: 3,
    PatientName: 'Maria Taylor',
    Age: '14 Years 10 Months 4 days',
    Gender: 'Female',
    Phone: '6457345632',
    GuardianName: 'Jonson',
    Address: 'CA, USA',
    Dead: 'No',
    Action : '',
  },
  {
    id: 4,
    PatientName: 'Arnav Joshi',
    Age: '2 Months 25 days',
    Gender: 'Male',
    Phone: '65473832',
    GuardianName: '',
    Address: '',
    Dead: 'Yes',
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
    headerName: 'GuardianName',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.GuardianName}</Typography>
  },
  {
    flex: 0.2,
    field: 'Address',
    minWidth: 150,
    headerName: 'Address',
    renderCell: ({ row }: CellType) => (<Typography sx={{ color: 'text.secondary' }}>{row.Address}</Typography>)
  },
  {
    flex: 0.15,
    field: 'Dead',
    minWidth: 120,
    headerName: 'Dead',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Dead}</Typography>
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
                    <Icon icon='tabler:dots'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Show'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:menu-2'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  },
]


const Patient = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
  const getRowHeight = (): GridRowHeightReturnValue => 'auto';

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button
          component={Link}
          variant='contained'
          href='/Setup/PatientSetup/addPatient'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add New Patient
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Setup/PatientSetup/ImportPatient'
          startIcon={<Icon icon='tabler:upload' />}
        >
          Import Patient
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Setup/PatientSetup/disablePatient'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Disabled Patient List
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Setup/PatientSetup'
          startIcon={<Icon icon='tabler:trash' />}
        >
          Delete Selected
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
        getRowHeight={getRowHeight}
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

export default Patient
