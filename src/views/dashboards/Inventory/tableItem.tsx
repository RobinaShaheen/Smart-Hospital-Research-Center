
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

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Item: 'Head or beard covers and nets',
    Category: 'Apparel',
    Unit: 100,
    AvailableQuantity: 0,
    Description: '',
    Action : '',
  },
  {
    id: 2,
    Item: 'Medical shoe and boot covers',
    Category: 'Apparel',
    Unit: 100,
    AvailableQuantity: 30,
    Description: '',
    Action : '',
  },
  {
    id: 3,
    Item: 'Cardiac monitors, implantable or external',
    Category: 'Cardiology',
    Unit: 100,
    AvailableQuantity: 0,
    Description: '',
    Action : '',
  },
  {
    id: 4,
    Item: 'Electrocardiography machines',
    Category: 'Cardiology',
    Unit: 100,
    AvailableQuantity: 18,
    Description: 'Monitor for glucose management',
    Action : '',
  }
]

interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Item',
    minWidth: 130,
    headerName: 'Item',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Item}</Typography>
  },
  {
    flex: 0.2,
    field: 'Category',
    minWidth: 130,
    headerName: 'Category',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Category}</Typography>
  },
  {
    flex: 0.2,
    field: 'Unit',
    minWidth: 130,
    headerName: 'Unit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Unit}</Typography>
  },
  {
    flex: 0.2,
    field: 'AvailableQuantity',
    minWidth: 150,
    headerName: 'Available Quantity',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.AvailableQuantity}</Typography>
  },
  {
    flex: 0.2,
    field: 'Description',
    minWidth: 150,
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Description}</Typography>
  },
  {
    flex: 0.2,
    field: 'Action',
    minWidth: 150,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Action}</Typography>
  },
]

const TableItem = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button
          component={Link}
          variant='contained'
          href='/Inventory/add-item-form'
          startIcon={<Icon icon='tabler:receipt' />}
        >
          Add Item
        </Button>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
          />
        </Box>
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

export default TableItem
