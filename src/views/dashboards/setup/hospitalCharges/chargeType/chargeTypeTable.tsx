
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
    chargeType: 'Ambulance',
    appointment:'',
    opd:'',
    ipd:'',
    Pathology:'',
    radiology:'',
    bloodbank:'',
    ambulance:'',
    action:''
  },{
    id:1,
    chargeType: 'Ambulance',
    appointment:'',
    opd:'',
    ipd:'',
    Pathology:'',
    radiology:'',
    bloodbank:'',
    ambulance:'',
    action:''
  },{
    id:1,
    chargeType: 'Ambulance',
    appointment:'',
    opd:'',
    ipd:'',
    Pathology:'',
    radiology:'',
    bloodbank:'',
    ambulance:'',
    action:''
  },{
    id:1,
    chargeType: 'Ambulance',
    appointment:'',
    opd:'',
    ipd:'',
    Pathology:'',
    radiology:'',
    bloodbank:'',
    ambulance:'',
    action:''
  },
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'chargeType',
    minWidth: 50,
    headerName: 'Charge Tpe',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.chargeType}</Typography>
  },
  {
    flex: 0.2,
    field: 'appointment',
    minWidth: 150,
    headerName: 'Appointment',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },
  {
    flex: 0.2,
    field: 'opd',
    minWidth: 150,
    headerName: 'OPD',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },{
    flex: 0.2,
    field: 'ipd',
    minWidth: 150,
    headerName: 'IPD',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },{
    flex: 0.2,
    field: 'pathology',
    minWidth: 150,
    headerName: 'Pathology',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },{
    flex: 0.2,
    field: 'radiology',
    minWidth: 150,
    headerName: 'Radiology',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },{
    flex: 0.2,
    field: 'bloodbank',
    minWidth: 150,
    headerName: 'Blood Bank',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
  },{
    flex: 0.2,
    field: 'ambulance',
    minWidth: 150,
    headerName: 'Ambulance',
    renderCell: ({}: CellType) => (
        <div>
            <input type="checkbox" />
        </div>
    )
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

const ChargesTypeTable = () => {
  
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
      href='/setup/hospitalCharges/ChargesType/AddChargesType'
      startIcon={<Icon icon='tabler:plus' />}
    >
      Add Charge Type
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

export default ChargesTypeTable
