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
    Name: 'Medical Shoe and boot covers',
    Category: 'Apparel',
    Supplier: 'VK Supplier',
    Store: 'Vardaan',
    Date: '08/31/2024',
    Description: '',
    TotalQuantity: 5,
    PurchasePrice : 50.00,
  },
  {
    id: 2,
    Name: 'Uniform (Patient-Staff)',
    Category: 'Uniform',
    Supplier: 'VK Supplier',
    Store: 'Vinay Pharmacy',
    Date: '08/25/2024',
    Description: "Inventory item is a separate product which can be specified in stock. If your company sells stock items, you can track inventory",
    TotalQuantity: 15,
    PurchasePrice : 300.00,
  },
  {
    id: 3,
    Name: 'Surgical Blade',
    Category: 'Surgical Blade',
    Supplier: 'Quick Service',
    Store: 'SK Pharma',
    Date: '08/20/2024',
    Description: "An infusion infuses fluids medication or nutrients into a patient body. It is generally used intravenously",
    TotalQuantity: 15,
    PurchasePrice : 100.00,
  }
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
    field: 'Category',
    minWidth: 130,
    headerName: 'Category',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Category}</Typography>
  },
  {
    flex: 0.2,
    field: 'Supplier',
    minWidth: 130,
    headerName: 'Supplier',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Supplier}</Typography>
  },
  {
    flex: 0.2,
    field: 'Store',
    minWidth: 150,
    headerName: 'Store',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Store}</Typography>
  },
  {
    flex: 0.2,
    field: 'Date',
    minWidth: 150,
    headerName: 'Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Date}</Typography>
  },
  {
    flex: 0.2,
    field: 'Description',
    minWidth: 150,
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Description}</Typography>
  },
  {
    flex: 0.15,
    field: 'TotalQuantity',
    minWidth: 120,
    headerName: 'Total Quantity',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.TotalQuantity}</Typography>
  },
  {
    flex: 0.15,
    field: 'PurchasePrice',
    minWidth: 120,
    headerName: 'Purchase Price ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.PurchasePrice}</Typography>
  },
]

const ItemTable = () => {
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
          href='/Inventory/add-item-stock'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Item Stock
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Inventory/issue-table'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Issue Item
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/Inventory/add-item'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Item
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

export default ItemTable
