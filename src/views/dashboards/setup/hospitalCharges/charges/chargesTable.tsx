
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
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id:1,
    name: 'Private Charges',
    chargesCatagory: 'Report Discussion',
    chargeType: 'Ambulance',
    unit: 'per hour',
    tax: '30.00',
    standardCharges:'120.00'
  },{
    id:1,
    name: 'Private Charges',
    chargesCatagory: 'Report Discussion',
    chargeType: 'Ambulance',
    unit: 'per hour',
    tax: '30.00',
    standardCharges:'120.00'
  },{
    id:1,
    name: 'Private Charges',
    chargesCatagory: 'Report Discussion',
    chargeType: 'Ambulance',
    unit: 'per hour',
    tax: '30.00',
    standardCharges:'120.00'
  },{
    id:1,
    name: 'Private Charges',
    chargesCatagory: 'Report Discussion',
    chargeType: 'Ambulance',
    unit: 'per hour',
    tax: '30.00',
    standardCharges:'120.00'
  },
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
  },
  {
    flex: 0.1,
    field:'chargesCatagory',
    minWidth: 250,
    sortable: false,
    headerName: 'Charges Catagory',
    renderCell: ({ row }: CellType) => <Typography sx={{color:'text.secondary'}}>{row.chargesCatagory}</Typography>
  },
  {
    flex: 0.2,
    field: 'chargeType',
    minWidth: 50,
    headerName: 'Charge Tpe',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.chargeType}</Typography>
  },
  {
    flex: 0.2,
    field: 'unit',
    minWidth: 150,
    headerName: 'Unit',
    renderCell: ({ row }: CellType) => <Typography sx={{color: 'text.secondary'}}>{row.unit}</Typography>
  },
  {
    flex: 0.2,
    field: 'tax',
    minWidth: 150,
    headerName: 'tax',
    renderCell: ({ row }: CellType) => <Typography sx={{color: 'text.secondary'}}>{row.tax}</Typography>
  },
  {
    flex: 0.2,
    field: 'standardCharges',
    minWidth: 150,
    headerName: 'Standard Charges',
    renderCell: ({ row }: CellType) => <Typography sx={{color: 'text.secondary'}}>{row.standardCharges}</Typography>
  }
      
]

const ChargesTable = () => {
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
      >
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField
        value={value}
        placeholder='Search...'
        onChange={e => setValue(e.target.value)}
      />
    </Box>
    <Button
      component={Link}
      variant='contained'
      href='/setup/hospitalCharges/Charges/AddCharges'
      startIcon={<Icon icon='tabler:plus' />}
    >
      Add Charges
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

export default ChargesTable
