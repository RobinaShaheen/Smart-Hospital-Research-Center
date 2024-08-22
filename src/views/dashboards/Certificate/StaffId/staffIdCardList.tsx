
// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { IconButton, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Custom Component Imports
// import CustomTextField from 'src/@core/components/mui/text-field'
// import { IconButton, Tooltip } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    IDCardTitle: 'Staff ID Card Title',
    BackgroundImage: '',
    Action: ''
  }
]

interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'IDCardTitle',
    minWidth: 130,
    headerName: 'ID Card Title',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.IDCardTitle}</Typography>
  },
  {
    flex: 0.2,
    field: 'BackgroundImage',
    minWidth: 130,
    headerName: 'Background Image',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BackgroundImage}</Typography>
  },
  {
    flex: 0.2,
    field: 'Action',
    minWidth: 130,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='view'>
                <IconButton size='small' onClick={()=>console.log('view', row.id)}>
                    <Icon icon='tabler:eye'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Edit'>
                <IconButton size='small' onClick={()=>console.log('edit', row.id)}>
                    <Icon icon='tabler:edit'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
                <IconButton size='small' onClick={()=>console.log('Delete', row.id)}>
                    <Icon icon='tabler:trash'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  }
]

const StaffIdCardList = () => {
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
            Staff ID Card List
        </Typography>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search...'
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

export default StaffIdCardList
