
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
// ** MUI Imports
import { FC } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { FormControlLabel, Switch } from '@mui/material'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Name: 'User Login',
    Action: ''
  },
  {
    id: 2,
    Name: 'Staff Login',
    Action: ''
  },
  {
    id: 3,
    Name: 'Online Appointment',
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
    renderCell: ({}: CellType) => (
      <CustomSwitchField label=''/>
    )
  }
]


const CaptchaSetting = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
      <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Captcha Setting
      </Typography>  
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

export default CaptchaSetting
