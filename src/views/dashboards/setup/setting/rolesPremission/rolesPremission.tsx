
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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, Tooltip } from '@mui/material'
import AssignPremission from './assignPremission'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Role: 'Admin',
    Type: 'System',
    Action: '',
  },
  {
    id: 2,
    Role: 'Accountant',
    Type: 'System',
    Action: '',
  },
  {
    id: 3,
    Role: 'Doctor',
    Type: 'System',
    Action: '',
  },
  {
    id: 4,
    Role: 'Pharmacist',
    Type: 'System',
    Action: '',
  },
  {
    id: 5,
    Role: 'Pathologist',
    Type: 'System',
    Action: '',
  },
  {
    id: 6,
    Role: 'Radiologist',
    Type: 'System',
    Action: '',
  },
  {
    id: 7,
    Role: 'Super Admin',
    Type: 'System',
    Action: '',
  },
  {
    id: 8,
    Role: 'Receptionist',
    Type: 'System',
    Action: '',
  },
  {
    id: 9,
    Role: 'Nurse',
    Type: 'System',
    Action: '',
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Role',
    minWidth: 130,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Role}</Typography>
  },
  {
    flex: 0.2,
    field: 'Type',
    minWidth: 130,
    headerName: 'Type',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Type}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Assign Premission'>
                <IconButton size='small' onClick={()=><AssignPremission/>}>
                    <Icon icon='tabler:pencil'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='edit'>
                <IconButton size='small' onClick={()=>console.log('edit', row.id)}>
                    <Icon icon='tabler:edit'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  }
]


const RolePremission = () => {
  

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
          Role List
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
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Role
        </Typography>
        <CustomTextField fullWidth label='Name' required sx={{ mb: 2 }}/>
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

export default RolePremission
