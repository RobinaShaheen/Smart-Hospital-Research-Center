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
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    StaffID: '',
    Name: '',
    Designation: '',
    Department: '',
    FatherName: '',
    MotherName: '',
    DateOfJoining: '',
    Address: '',
    Phone: '',
    DateOfBirth: ''
  }
]

interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'StaffID',
    minWidth: 130,
    headerName: 'Staff ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.StaffID}</Typography>
  },
  {
    flex: 0.2,
    field: 'Name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Name}</Typography>
  },
  {
    flex: 0.2,
    field: 'Designation',
    minWidth: 130,
    headerName: 'Designation',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Designation}</Typography>
  },
  {
    flex: 0.2,
    field: 'Department',
    minWidth: 150,
    headerName: 'Department',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Department}</Typography>
  },
  {
    flex: 0.2,
    field: 'FatherName',
    minWidth: 150,
    headerName: 'Father Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.FatherName}</Typography>
  },
  {
    flex: 0.2,
    field: 'MotherName',
    minWidth: 150,
    headerName: 'Mother Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.MotherName}</Typography>
  },
  {
    flex: 0.2,
    field: 'DateOfJoining',
    minWidth: 150,
    headerName: 'Date Of Joining',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.DateOfJoining}</Typography>
  },
  {
    flex: 0.2,
    field: 'Address',
    minWidth: 150,
    headerName: 'Address',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Address}</Typography>
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
    field: 'DateOfBirth',
    minWidth: 150,
    headerName: 'Date Of Birth',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.DateOfBirth}</Typography>
  }
]

const StaffList = () => {
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
            Staff List
        </Typography>
        <Button
          component={Link}
          variant='contained'
          href='/Certificate/StaffId'
          startIcon={<Icon icon='tabler:search' />}
        >
          Search
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Certificate/StaffId'
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

export default StaffList
