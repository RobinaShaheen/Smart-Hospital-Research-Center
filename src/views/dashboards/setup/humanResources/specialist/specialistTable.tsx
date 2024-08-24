
// ** React Imports
'use client'
import { useState } from 'react'

import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id:1,
    specialist:'Neuroradiology',
    action:''
  },{
    id:2,
    specialist:'Ophthalmologists',
    action:''
  },{
    id:3,
    specialist:'Gastroenterologists',
    action:''
  },{
    id:4,
    specialist:'Endocrinologist',
    action:''
  },{
    id:5,
    specialist:'Dermatologists',
    action:''
  },{
    id:6,
    specialist:'Cardiologists',
    action:''
  },
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'specialist',
    minWidth: 50,
    headerName: 'Specialist',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.specialist}</Typography>
  },
  {
    flex: 0.2,
    field: 'action',
    minWidth: 150,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Content'>
            <IconButton size='small' onClick={() => console.log('Delete', row.id)}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Edit'>
            <IconButton size='small' onClick={() => console.log('Edit', row.id)}>
              <Icon icon='tabler:edit' />
            </IconButton>
          </Tooltip>
        </Box>
      )
  }
      
]

const SpecialistTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns: GridColDef[] = [
    ...defaultColumns
   
  ]

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      ><Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <CustomTextField
        value={value}
        placeholder='Search...'
        onChange={e => setValue(e.target.value)}
      />
    </Box>
    <Button
      component={Link}
      variant='contained'
      href='/setup/humanResources/specialist/AddSpecialist'
      startIcon={<Icon icon='tabler:plus' />}
    >
      Add Specialist
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

export default SpecialistTable
