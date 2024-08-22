// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import { FC } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
import { FormControlLabel, Switch } from '@mui/material'
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Name: 'My Appointment',
    Action: ''
  },
  {
    id: 2,
    Name: 'OPD',
    Action: ''
  },
  {
    id: 3,
    Name: 'IPD',
    Action: ''
  },
  {
    id: 4,
    Name: 'Pharmacy',
    Action: ''
  },
  {
    id: 5,
    Name: 'Pathology',
    Action: ''
  }
]


interface CellType {
  row: typeof dummyData[0]
}

interface CustomSwitchFieldProps {
  label: string
}

const CustomSwitchField: FC<CustomSwitchFieldProps> = ({ label }) => (
  <FormControlLabel
      control={<Switch />}
      label={label}
      sx={{ mb: 2 }}
  />
);


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Name}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
      <CustomSwitchField label=''/>
    )
  }
]


const Patient = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default Patient
