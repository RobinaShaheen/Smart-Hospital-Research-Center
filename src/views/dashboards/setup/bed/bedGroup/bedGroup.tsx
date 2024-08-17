// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'
import { FC } from 'react'
// ** MUI Imports
import Image from 'next/image'
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
import { FormControlLabel, IconButton, InputAdornment, MenuItem, Switch, TextField, Tooltip } from '@mui/material'
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Name: 'VIP Ward',
    Floor: 'Ground Floor',
    Description: 'A palliative or hospice unit is where end-of-life care is provided if you have a life-limiting illness, which may or may not be cancer-related. Hospice and palliative care focus on providing comfort a',
    Action: ''
  },
  {
    id: 2,
    Name: 'Private Ward',
    Floor: '3rd Floor',
    Description: 'The operating room (OR) is where both inpatient and outpatient surgeries are performed.',
    Action: ''
  },
  {
    id: 3,
    Name: 'General Ward Male',
    Floor: '3rd Floor',
    Description: '',
    Action: ''
  },
  {
    id: 4,
    Name: 'ICU',
    Floor: '2nd Floor',
    Description: 'The intensive care unit (ICU) is where you are sent if you require close monitoring. The ICU is also referred to as a critical care unit. Nurses in the ICU typically have just one or two patients, so',
    Action: ''
  },
  {
    id: 5,
    Name: 'NICU',
    Floor: '2nd Floor',
    Description: 'The NICU may be either the neurological intensive care unit or the neonatal intensive care unit, depending on whether the facility treats adults or children. In some facilities, the neurological ICU i',
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
    field: 'Floor',
    minWidth: 130,
    headerName: 'Floor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Floor}</Typography>
  },
  {
    flex: 0.2,
    field: 'Description',
    minWidth: 130,
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography 
        variant="body2" 
        sx={{ color: 'text.secondary', overflow: 'auto' }}
      >
        {row.Description}
      </Typography>
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


const BedGroup = () => {

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
        Bed Group List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Bed/addBedGroup'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Bed Group
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

export default BedGroup
