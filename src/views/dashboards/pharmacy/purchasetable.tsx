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
    purchaseNo: 'PUR-001',
    purchaseDate: '2024-08-01',
    billNo: 'BILL-001',
    supplierName: 'ABC Pharmaceuticals',
    total: 1000,
    tax: 50,
    discount: 100,
    netAmount: 950
  },
  {
    id: 2,
    purchaseNo: 'PUR-002',
    purchaseDate: '2024-08-02',
    billNo: 'BILL-002',
    supplierName: 'XYZ Drugs',
    total: 500,
    tax: 25,
    discount: 25,
    netAmount: 500
  },
  {
    id: 3,
    purchaseNo: 'PUR-003',
    purchaseDate: '2024-08-03',
    billNo: 'BILL-003',
    supplierName: 'HealthCare Supplies',
    total: 1200,
    tax: 60,
    discount: 150,
    netAmount: 1110
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'purchaseNo',
    minWidth: 130,
    headerName: 'Purchase No',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.purchaseNo}</Typography>
  },
  {
    flex: 0.2,
    field: 'purchaseDate',
    minWidth: 120,
    headerName: 'Purchase Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.purchaseDate}</Typography>
  },
  {
    flex: 0.2,
    field: 'billNo',
    minWidth: 130,
    headerName: 'Bill No',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.billNo}</Typography>
  },
  {
    flex: 0.2,
    field: 'supplierName',
    minWidth: 150,
    headerName: 'Supplier Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.supplierName}</Typography>
  },
  {
    flex: 0.15,
    field: 'total',
    minWidth: 120,
    headerName: 'Total ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.total}</Typography>
  },
  {
    flex: 0.15,
    field: 'tax',
    minWidth: 120,
    headerName: 'Tax ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.tax}</Typography>
  },
  {
    flex: 0.15,
    field: 'discount',
    minWidth: 120,
    headerName: 'Discount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.discount}</Typography>
  },
  {
    flex: 0.15,
    field: 'netAmount',
    minWidth: 150,
    headerName: 'Net Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.netAmount}</Typography>
  }
]

const PurchaseTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button
            component={Link}
            variant='contained'
            href='/dashboards/pharmacy/add-purchase'
            startIcon={<Icon icon='tabler:receipt' />}
          >
            Purchase Medicine
          </Button>
        </Box>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Purchase'
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

export default PurchaseTable
