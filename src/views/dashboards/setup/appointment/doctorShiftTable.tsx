
// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    doctorName: 'DOC-001',
    morning:'',
    evening:''
  },
  {
    id: 2,
    doctorName: 'DOC-002',
    morning:'',
    evening:''
  },
  {
    id: 3,
    doctorName: 'DOC-003',
    morning:'',
    evening:''
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const defualtcolumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'doctorName',
    minWidth: 130,
    headerName: 'Doctor Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.doctorName}</Typography>
  },
  {
    flex: 0.2,
    field: 'morning',
    minWidth: 130,
    headerName: 'Morning',
    renderCell: () => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
        </Box>
      )
  },
  {
    flex: 0.2,
    field: 'evening',
    minWidth: 130,
    headerName: 'Evening',
    renderCell: () => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
        </Box>
      )
  }

]


const DoctorShiftTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns: GridColDef[] = [
    ...defualtcolumns,
    
]

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

export default DoctorShiftTable
