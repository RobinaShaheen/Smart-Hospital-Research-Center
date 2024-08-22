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
    billNo: 'BILL-001',
    caseId: 'CASE-001',
    issueDate: '2024-08-01',
    recievedTo: 'John Doe',
    bloodGroup: 'A',
    gender: 'xx',
    donorName: 'xyz',
    bags: 2,
    bloodQty: 20,
    amount:100,
    paidAmount: 80,
    balanceAmount:20
  },
  {
    id: 2,
    billNo: 'BILL-002',
    caseId: 'CASE-002',
    issueDate: '2024-08-02',
    recievedTo: 'Alice Johnson',
    bloodGroup: 'B',
    gender: 'xy',
    donorName: 'defg',
    bags: 2,
    bloodQty: 0,
    amount:100,
    paidAmount: 80,
    balanceAmount:20
  },
  {
    id: 3,
    billNo: 'BILL-003',
    caseId: 'CASE-003',
    issueDate: '2024-08-03',
    recievedTo: 'Sam Brown',
    bloodGroup: 'A',
    gender: 'xx',
    donorName: 'abc',
    bags: 2,
    bloodQty: 50,
    amount:100,
    paidAmount: 80,
    balanceAmount:20
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'billNo',
    minWidth: 130,
    headerName: 'Bill No',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.billNo}</Typography>
  },
  {
    flex: 0.2,
    field: 'caseId',
    minWidth: 130,
    headerName: 'Case ID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.caseId}</Typography>
  },
  {
    flex: 0.2,
    field: 'issueDate',
    minWidth: 130,
    headerName: 'Issue Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.issueDate}</Typography>
  },
  {
    flex: 0.2,
    field: 'recievedTo',
    minWidth: 150,
    headerName: 'Recieved To',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.recievedTo}</Typography>
  },
  {
    flex: 0.2,
    field: 'bloodGroup',
    minWidth: 150,
    headerName: 'BLood Group',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.bloodGroup}</Typography>
  },
  {
    flex: 0.2,
    field: 'gender',
    minWidth: 150,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.gender}</Typography>
  },
  {
    flex: 0.15,
    field: 'donorName',
    minWidth: 120,
    headerName: 'Donor Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.donorName}</Typography>
  },
  {
    flex: 0.15,
    field: 'bags',
    minWidth: 120,
    headerName: 'Bags',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.bags}</Typography>
  },
  {
    flex: 0.15,
    field: 'bloodQty',
    minWidth: 150,
    headerName: 'Blood Qty',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.bloodQty}</Typography>
  },
  {
    flex: 0.15,
    field: 'amount',
    minWidth: 150,
    headerName: 'Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.amount}</Typography>
  },
  {
    flex: 0.15,
    field: 'paidAmount',
    minWidth: 150,
    headerName: 'Paid Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.paidAmount}</Typography>
  },
  {
    flex: 0.15,
    field: 'balanceAmount',
    minWidth: 150,
    headerName: 'Balance Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.balanceAmount}</Typography>
  }
]

const BloodIssueTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
          />
        </Box>
        <Button
          component={Link}
          variant='contained'
          href='/billing/bloodIssueBilling/issueBlood'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Issue Blood
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

export default BloodIssueTable
