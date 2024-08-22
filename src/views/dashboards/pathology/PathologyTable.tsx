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
    reportingDate: '2024-08-01',
    patientName: 'John Doe',
    referenceDoctor: 'Dr. Smith',
    previousReportValue: 90,
    amount: 100,
    paidAmount: 80,
    balanceAmount: 20
  },
  {
    id: 2,
    billNo: 'BILL-002',
    caseId: 'CASE-002',
    reportingDate: '2024-08-02',
    patientName: 'Alice Johnson',
    referenceDoctor: 'Dr. Lee',
    previousReportValue: 50,
    amount: 50,
    paidAmount: 50,
    balanceAmount: 0
  },
  {
    id: 3,
    billNo: 'BILL-003',
    caseId: 'CASE-003',
    reportingDate: '2024-08-03',
    patientName: 'Sam Brown',
    referenceDoctor: 'Dr. Adams',
    previousReportValue: 150,
    amount: 200,
    paidAmount: 150,
    balanceAmount: 50
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
    field: 'reportingDate',
    minWidth: 130,
    headerName: 'Reporting Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.reportingDate}</Typography>
  },
  {
    flex: 0.2,
    field: 'patientName',
    minWidth: 150,
    headerName: 'Patient Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.patientName}</Typography>
  },
  {
    flex: 0.2,
    field: 'referenceDoctor',
    minWidth: 150,
    headerName: 'Reference Doctor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.referenceDoctor}</Typography>
  },
  {
    flex: 0.2,
    field: 'previousReportValue',
    minWidth: 150,
    headerName: 'Previous Report Value',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.previousReportValue}</Typography>
  },
  {
    flex: 0.15,
    field: 'amount',
    minWidth: 120,
    headerName: 'Amount ($)',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.amount}</Typography>
  },
  {
    flex: 0.15,
    field: 'paidAmount',
    minWidth: 120,
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

const PathologyTable = () => {
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
          href='/pathology/generate-bill'
          startIcon={<Icon icon='tabler:receipt' />}
        >
          Generate Bill
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/pathology/pathology-test'
          startIcon={<Icon icon='tabler:medication' />}
        >
          Pathology Test
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

export default PathologyTable
