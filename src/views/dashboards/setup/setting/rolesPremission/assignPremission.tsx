
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

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    DashboardWidgets: 'Bill',
    Feature: 'Staff Role Count Widget',
    View: '',
    Add: '',
    Edit: '',
    Delete: '',
  },
  {
    id: 2,
    DashboardWidgets: 'Appointment',
    Feature: 'IPD Income Widget',
    View: '',
    Add: '',
    Edit: '',
    Delete: '',
  },
  {
    id: 3,
    DashboardWidgets: 'OPD',
    Feature: 'OPD Income Widget',
    View: '',
    Add: '',
    Edit: '',
    Delete: '',
  },
  {
    id: 4,
    DashboardWidgets: 'IPD',
    Feature: 'Pharmacy Income Widget',
    View: '',
    Add: '',
    Edit: '',
    Delete: '',
  },
]


interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'DashboardWidgets',
    minWidth: 130,
    headerName: 'Dashboard and Widgets',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.DashboardWidgets}</Typography>
  },
  {
    flex: 0.2,
    field: 'Feature',
    minWidth: 130,
    headerName: 'Feature',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Feature}</Typography>
  },
  {
    flex: 0.2,
    field: 'View',
    minWidth: 130,
    headerName: 'View',
    renderCell: ({}: CellType) => (
        <input type="checkbox" />
    )
  },
  {
    flex: 0.2,
    field: 'Add',
    minWidth: 130,
    headerName: 'Add',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Add}</Typography>
  },
  {
    flex: 0.2,
    field: 'Edit',
    minWidth: 130,
    headerName: 'Edit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Edit}</Typography>
  },
  {
    flex: 0.2,
    field: 'Delete',
    minWidth: 130,
    headerName: 'Delete',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Delete}</Typography>
  }
]


const AssignPremission = () => {

  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
        <Typography
            variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
            gutterBottom
            sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
            Assign Premission (Admin)
        </Typography>
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
        <Button
          component={Link}
          variant='contained'
          href=''
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default AssignPremission
