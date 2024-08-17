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
import input from 'src/@core/theme/overrides/input'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Event: 'OPD Patient Registration',
    Subject: 'New Appointment Created',
    Option: '',
    StaffMessage: 'Appointment has been created for Patient: {{patient_name}} ({{patient_id}}). Appointment Date: {{appointment_date}} With Doctor Name: {{doctor_name}}.',
    PatientMessage: 'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}'
  },
  {
    id: 2,
    Event: 'OPD Patient Registration',
    Subject: 'New Appointment Created',
    Option: '',
    StaffMessage: 'Appointment has been created for Patient: {{patient_name}} ({{patient_id}}). Appointment Date: {{appointment_date}} With Doctor Name: {{doctor_name}}.',
    PatientMessage: 'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}'
  },
  {
    id: 3,
    Event: 'OPD Patient Registration',
    Subject: 'New Appointment Created',
    Option: '',
    StaffMessage: 'Appointment has been created for Patient: {{patient_name}} ({{patient_id}}). Appointment Date: {{appointment_date}} With Doctor Name: {{doctor_name}}.',
    PatientMessage: 'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}'
  },
  {
    id: 4,
    Event: 'OPD Patient Registration',
    Subject: 'New Appointment Created',
    Option: '',
    StaffMessage: 'Appointment has been created for Patient: {{patient_name}} ({{patient_id}}). Appointment Date: {{appointment_date}} With Doctor Name: {{doctor_name}}.',
    PatientMessage: 'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}'
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
    field: 'Subject',
    minWidth: 130,
    headerName: 'Subject',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Subject}</Typography>
  },
  {
    flex: 0.2,
    field: 'Option',
    minWidth: 130,
    headerName: 'Option',
    renderCell: ({ row }: CellType) => (
        <>
            <><input type="checkbox" /><label htmlFor="Email">Enabled</label></><br/>
            <><input type="checkbox" /><label htmlFor="Email">Staff</label></><br/>
            <><input type="checkbox" /><label htmlFor="Email">Patient</label></>
        </>
    )
  },
  {
    flex: 0.2,
    field: 'StaffMessage',
    minWidth: 130,
    headerName: 'Staff Message',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.StaffMessage}</Typography>
  },
  {
    flex: 0.2,
    field: 'PatientMessage',
    minWidth: 200,
    headerName: 'Patient Message',
    renderCell: ({ row }: CellType) => 
        <Typography 
          variant="body2" 
          sx={{ color: 'text.secondary', overflow: 'auto' }}
        >
          {row.PatientMessage}
        </Typography>
  }
]


const SystemNotificationSetting = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

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
        System Notification Setting
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

export default SystemNotificationSetting
