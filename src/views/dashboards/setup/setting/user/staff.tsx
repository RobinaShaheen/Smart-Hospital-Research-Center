// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import { FC } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { FormControlLabel, Switch } from '@mui/material'
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    StaffId: 9002,
    Name: 'Sonia',
    Email: 'sonia@gmail.com',
    Role: 'Doctor',
    Designation: 'Doctor',
    Department: 'OT',
    Phone: '7865439320',
    Action: ''
  },
  {
    id: 2,
    StaffId: 9008,
    Name: 'Sansa',
    Email: 'sansa@gmail.com',
    Role: 'Doctor',
    Designation: 'Doctor',
    Department: 'Gynecology',
    Phone: '875673432',
    Action: ''
  },
  {
    id: 3,
    StaffId: 9005,
    Name: 'Belina',
    Email: 'belina@gmail.com',
    Role: 'Pathologist',
    Designation: 'Pathologist',
    Department: 'Pathology',
    Phone: '565465435',
    Action: ''
  },
  {
    id: 4,
    StaffId: 9006,
    Name: 'John',
    Email: 'john@gmail.com',
    Role: 'Radiologist',
    Designation: 'Radiologist',
    Department: 'Radiology',
    Phone: '876954325',
    Action: ''
  },
  {
    id: 5,
    StaffId: 9007,
    Name: 'Alice',
    Email: 'alice@gmail.com',
    Role: 'Receptionist',
    Designation: 'Receptionist',
    Department: 'Reception',
    Phone: '879567324',
    Action: ''
  },
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
    field: 'StaffId',
    minWidth: 130,
    headerName: 'Staff Id',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.StaffId}</Typography>
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
    field: 'Email',
    minWidth: 130,
    headerName: 'Email',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Email}</Typography>
  },
  {
    flex: 0.2,
    field: 'Role',
    minWidth: 130,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Role}</Typography>
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
    minWidth: 130,
    headerName: 'Department',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Department}</Typography>
  },
  {
    flex: 0.2,
    field: 'Phone',
    minWidth: 130,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Phone}</Typography>
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


const Staff = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
      <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
            sx={{mb: 4}}
          />
        </Box>
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

export default Staff
