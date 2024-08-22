
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
    Item: 'Personal Protection Equipment Kit',
    ItemCategory: 'Medical Equipment',
    IssueReturn: '08/25/2024-08/31/2024',
    IssueTo: 'Doctor Sonia Bush (9002)',
    IssuedBy: 'Super Admin',
    Quantity: 2,
    Status: 'Click to return',
    Action : 50.00,
  },
  {
    id: 2,
    Item: 'Automatic Blood Pressure',
    ItemCategory: 'Automatic Blood Pressure Cuff',
    IssueReturn: '08/25/2024-08/31/2024',
    IssueTo: 'Receptionist Maria Ford (9018)',
    IssuedBy: 'Jason Abbot',
    Quantity: 2,
    Status: 'Returned',
    Action : 50.00,
  },
  {
    id: 3,
    Item: 'Bed Sheet',
    ItemCategory: 'Bed Sheets',
    IssueReturn: '08/20/2024-08/26/2024',
    IssueTo: 'Nurse April Clinton (9020)',
    IssuedBy: 'Jason Abbot',
    Quantity: 5,
    Status: 'Click to return',
    Action : 50.00,
  },
  {
    id: 4,
    Item: 'Uniform (Patient Staff)',
    ItemCategory: 'Uniforms',
    IssueReturn: '08/15/2024-08/02/2024',
    IssueTo: 'Radiologist John Hook (9006)',
    IssuedBy: 'Jason Abbot',
    Quantity: 0,
    Status: 'Returned',
    Action : 50.00,
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
    field: 'ItemCategory',
    minWidth: 130,
    headerName: 'Item Category',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ItemCategory}</Typography>
  },
  {
    flex: 0.2,
    field: 'IssueReturn',
    minWidth: 130,
    headerName: 'Issue Return',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.IssueReturn}</Typography>
  },
  {
    flex: 0.2,
    field: 'IssueTo',
    minWidth: 150,
    headerName: 'Issue To',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.IssueTo}</Typography>
  },
  {
    flex: 0.2,
    field: 'IssuedBy',
    minWidth: 150,
    headerName: 'Issued By',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.IssuedBy}</Typography>
  },
  {
    flex: 0.2,
    field: 'Quantity',
    minWidth: 150,
    headerName: 'Quantity',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Quantity}</Typography>
  },
  {
    flex: 0.15,
    field: 'Status',
    minWidth: 120,
    headerName: 'Status',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Status}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Delete Item'>
                <IconButton size='small' onClick={()=>console.log('Delete', row.id)}>
                    <Icon icon='tabler:trash'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  },
]


const IssueTable = () => {

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
          href='/Inventory/add-Issue-Item'
          startIcon={<Icon icon='tabler:receipt' />}
        >
          Add Issue Item
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

export default IssueTable
