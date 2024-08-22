
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
    Name: 'GF - 101',
    BedType: 'Standard',
    BedGroup: 'VIP Ward-Ground Floor',
    Used: '',
    Action: ''
  },
  {
    id: 2,
    Name: 'GF - 105',
    BedType: 'Standard',
    BedGroup: 'ICU - 2nd Floor',
    Used: '',
    Action: ''
  },
  {
    id: 3,
    Name: 'GF - 106',
    BedType: 'VIP',
    BedGroup: 'General Ward Male - 3rd Floor',
    Used: '',
    Action: ''
  },
  {
    id: 4,
    Name: 'GF - 107',
    BedType: 'VIP',
    BedGroup: 'Private Ward - 3rd Floor',
    Used: '',
    Action: ''
  },
  {
    id: 5,
    Name: 'SF - 122',
    BedType: 'Normal',
    BedGroup: 'AC(Normal) - 1st Floor',
    Used: '',
    Action: ''
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Name}</Typography>
  },
  {
    flex: 0.2,
    field: 'BedType',
    minWidth: 130,
    headerName: 'Bed Type',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BedType}</Typography>
  },
  {
    flex: 0.2,
    field: 'BedGroup',
    minWidth: 130,
    headerName: 'Bed Group',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BedGroup}</Typography>
  },
  {
    flex: 0.2,
    field: 'Used',
    minWidth: 130,
    headerName: 'Used',
    renderCell: ({}: CellType) => (
        <input type="checkbox" />
    )
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


const BedList = () => {

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
        Bed List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Bed/addBed'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Bed
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

export default BedList
