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
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    meetingTitle: 'Report Discussion',
    date: '',
    apiUsed: 'Global',
    createdBy: 'Self',
    status:'',
    action:''
  },{
    id: 1,
    meetingTitle: 'Report Discussion',
    date: '',
    apiUsed: 'Global',
    createdBy: 'Self',
    status:'',
    action:''
  },{
    id: 1,
    meetingTitle: 'Report Discussion',
    date: '',
    apiUsed: 'Global',
    createdBy: 'Self',
    status:'',
    action:''
  },{
    id: 1,
    meetingTitle: 'Report Discussion',
    date: '',
    apiUsed: 'Global',
    createdBy: 'Self',
    status:'',
    action:''
  },{
    id: 1,
    meetingTitle: 'Report Discussion',
    date: '',
    apiUsed: 'Global',
    createdBy: 'Self',
    status:'',
    action:''
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'meetingTitle',
    minWidth: 130,
    headerName: 'Meeting Title',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.meetingTitle}</Typography>
  },
  {
    flex: 0.2,
    field: 'date',
    minWidth: 130,
    headerName: 'Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.date}</Typography>
  },
  {
    flex: 0.2,
    field: 'apiUsed',
    minWidth: 150,
    headerName: 'Api Used',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.apiUsed}</Typography>
  },
  {
    flex: 0.2,
    field: 'createdBy',
    minWidth: 150,
    headerName: 'Created By',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdBy}</Typography>
  },
    {
        flex: 0.1,
        minWidth: 130,
        sortable: false,
        field: 'status',
        headerName: 'Status',
        renderCell: ({ row }: CellType) => {
          const status = ['Awaited', 'Cancelled','Finished']
          return (
            <div>
                <CustomTextField  select >
                {status.map((status: string) => (
                    <MenuItem key={status} value={status}>
                    {status}
                    </MenuItem>
                ))}
              </CustomTextField>
            </div>
          );
        }
      },
      
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete Content'>
          <IconButton size='small' onClick={() => console.log('Delete', row.id)}>
            <Icon icon='tabler:trash' />
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
      
]

const LiveMeetingTable = () => {
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
          href='/liveConsultation/LiveMeeting/addLiveMeeting'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add
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

export default LiveMeetingTable