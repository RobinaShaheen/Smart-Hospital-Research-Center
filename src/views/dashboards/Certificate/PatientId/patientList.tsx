// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// ** Custom Component Imports
// import CustomTextField from 'src/@core/components/mui/text-field'
// import { IconButton, Tooltip } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    PatientName: '',
    Age: '',
    Gender: '',
    Phone: '',
    GuardianName: '',
    Address: ''
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
  }
]

const PatientList = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography
            variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
            gutterBottom
            sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
            Patient List
        </Typography>
        <Button
          component={Link}
          variant='contained'
          href='/Certificate/PatientId'
          startIcon={<Icon icon='tabler:search' />}
        >
          Search
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Certificate/PatientId'
        >
          Generate
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

export default PatientList
