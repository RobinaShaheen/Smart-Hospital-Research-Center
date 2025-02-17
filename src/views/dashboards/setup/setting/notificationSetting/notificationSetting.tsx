
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef, GridRowHeightReturnValue } from '@mui/x-data-grid'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Event: 'OPD Patient Registration',
    Option: '',
    TemplateId: '',
    SampleMessage: 'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}'
  },
  {
    id: 2,
    Event: 'IPD Patient Registration',
    Option: '',
    TemplateId: '',
    SampleMessage: 'Dear {{patient_name}} your IPD Registration at Smart Hospital is successful with Patient Id {{patient_id}} and IPD No {{ipd_no}}'
  },
  {
    id: 3,
    Event: 'IPD Patient Discharge',
    Option: '',
    TemplateId: '',
    SampleMessage: 'IPD Patient {{patient_name}} is now discharged from Smart Hospital Total bill amount is {{currency_symbol}}{{total_amount}} Total paid amount is {{currency_symbol}}{{paid_amount}} Total balance bill amount is {{currency_symbol}}{{balance_amount}}'
  },
  {
    id: 4,
    Event: 'Login Credential',
    Option: '',
    TemplateId: '',
    SampleMessage: 'Hello {{display_name}} your Smart Hospital login details are Url: {{url}} Username: {{username}} Password: {{password}}'
  }
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Event',
    minWidth: 130,
    headerName: 'Event',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Event}</Typography>
  },
  {
    flex: 0.2,
    field: 'Option',
    minWidth: 130,
    headerName: 'Option',
    renderCell: ({}: CellType) => (
        <>
            <><input type="checkbox" /><label htmlFor="Email">Email</label></>
            <><input type="checkbox" /><label htmlFor="Email">SMS</label></>
            <><input type="checkbox" /><label htmlFor="Email">Mobile App</label></>
        </>
    )
  },
  {
    flex: 0.2,
    field: 'TemplateId',
    minWidth: 130,
    headerName: 'TemplateId',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.TemplateId}</Typography>
  },
  {
    flex: 0.2,
    field: 'SampleMessage',
    minWidth: 200,
    headerName: 'SampleMessage',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.SampleMessage}</Typography>
  }
]


const NotificationSetting = () => {
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
  const getRowHeight = (): GridRowHeightReturnValue => 'auto';

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
        Notification Setting
        </Typography>
        <Button
          component={Link}
          variant='contained'
          href=''
        >
          Save
        </Button>
      </CardContent>
      <DataGrid
        autoHeight
        getRowHeight={getRowHeight}
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

export default NotificationSetting
