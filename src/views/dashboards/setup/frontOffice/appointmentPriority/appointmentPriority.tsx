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
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Priority: 'Normal',
    Action: ''
  },
  {
    id: 2,
    Priority: 'Urgent',
    Action: ''
  },
  {
    id: 3,
    Priority: 'Very Urgent',
    Action: ''
  },
  {
    id: 4,
    Priority: 'Low',
    Action: ''
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Priority',
    minWidth: 130,
    headerName: 'Priority',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Priority}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) =>(
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Edit'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:pencil'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:trash'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
        
    )
  }
]


const AppointmentPriority = () => {

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
        Appointment Priority List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/FrontOffice/addPriority'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Priority
        </Button>
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

export default AppointmentPriority
