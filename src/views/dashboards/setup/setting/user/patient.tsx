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
    PatientId: 1,
    Name: 'Olivier Thomas',
    Username: 'pat1',
    MobileNumber: '7865439320',
    Action: ''
  },
  {
    id: 2,
    PatientId: 2,
    Name: 'John Marshall',
    Username: 'pat2',
    MobileNumber: '786543932',
    Action: ''
  },
  {
    id: 3,
    PatientId: 9,
    Name: 'Manu',
    Username: 'pat9',
    MobileNumber: '',
    Action: ''
  },
  {
    id: 4,
    PatientId: 121,
    Name: 'Maria Taylor',
    Username: 'pat121',
    MobileNumber: '897654352',
    Action: ''
  },
  {
    id: 5,
    PatientId: 151,
    Name: 'Wordey Limpi',
    Username: 'pat151',
    MobileNumber: '93852741',
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
    field: 'PatientId',
    minWidth: 130,
    headerName: 'Patient Id',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.PatientId}</Typography>
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
    field: 'Username',
    minWidth: 130,
    headerName: 'Username',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Username}</Typography>
  },
  {
    flex: 0.2,
    field: 'MobileNumber',
    minWidth: 130,
    headerName: 'Mobile Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.MobileNumber}</Typography>
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

export default Patient
