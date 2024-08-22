
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
// ** Dummy Data
const dummyData = [
  {
    id: '',
    opdIpdNo: '',
    patientName: '',
    gender: '',
    mobileNumber: '',
    discharge:''
  },
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 130,
    headerName: '#',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.id}</Typography>
  },
  {
    flex: 0.2,
    field: 'opdIpdNp',
    minWidth: 130,
    headerName: 'OPD/IPD No.',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.opdIpdNo}</Typography>
  },
  {
    flex: 0.2,
    field: 'patientName',
    minWidth: 130,
    headerName: 'Patient Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientName}</Typography>
  },
  {
    flex: 0.2,
    field: 'gender',
    minWidth: 130,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.gender}</Typography>
  },
  {
    flex: 0.2,
    field: 'mobileNo',
    minWidth: 150,
    headerName: 'Mobile Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.mobileNumber}</Typography>
  },
  {
    flex: 0.2,
    field: 'discharge',
    minWidth: 130,
    headerName: 'Discharge',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.discharge}</Typography>
  },
]

const CertificateTable = () => {

  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns: GridColDef[] = [
    ...defaultColumns,
    
  ]

  return (
    <Card>
        <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant='h6'>Patient List</Typography>
          <Button
            component={Link}
            href='/human-resource/import'
            variant='contained'
          >
            Generate
          </Button>
        </Box>
        </CardContent>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
      
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

export default CertificateTable;