
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
    department:'Nursing Department',
    action:''
  },{
    id:2,
    department:'NICU',
    action:''
  },{
    id:3,
    department:'BURN CARE',
    action:''
  },{
    id:4,
    department:'Cardiology',
    action:''
  },{
    id:5,
    department:'Emergency',
    action:''
  },{
    id:6,
    department:'Finance',
    action:''
  },
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'department',
    minWidth: 50,
    headerName: 'Department',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.department}</Typography>
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

const DepartmentTable = () => {
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
      href='/setup/humanResources/department/AddDepartment'
      startIcon={<Icon icon='tabler:plus' />}
    >
      Add Department
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

export default DepartmentTable
