
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
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Box from '@mui/material/Box'
import { IconButton, Tooltip } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Custom Component Imports
// import CustomTextField from 'src/@core/components/mui/text-field'
// import { IconButton, Tooltip } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Title: 'Home',
    URL: 'https://demo.smart-hospital.in/frontend/Home',
    PageType: 'Standard',
    Action: ''
  },
  {
    id: 2,
    Title: 'Complain',
    URL: 'https://demo.smart-hospital.in/frontend/complain',
    PageType: 'Standard',
    Action: ''
  },
  {
    id: 3,
    Title: '404 page',
    URL: 'https://demo.smart-hospital.in/frontend/404-page',
    PageType: 'Standard',
    Action: ''
  },
  {
    id: 4,
    Title: 'Contact Us',
    URL: 'https://demo.smart-hospital.in/frontend/contactus',
    PageType: 'Standard',
    Action: ''
  }
]

interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Title',
    minWidth: 130,
    headerName: 'Title',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Title}</Typography>
  },
  {
    flex: 0.2,
    field: 'URL',
    minWidth: 130,
    headerName: 'URL',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.URL}</Typography>
  },
  {
    flex: 0.2,
    field: 'PageType',
    minWidth: 130,
    headerName: 'Page Type',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.PageType}</Typography>
  },
  {
    flex: 0.2,
    field: 'Action',
    minWidth: 150,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
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

const FrontCMSTable = () => {
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
            placeholder='Search...'
            onChange={e => setValue(e.target.value)}
          />
        </Box>
        <Button
          component={Link}
          variant='contained'
          href='/front-cms/addpage'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Page
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/front-cms/mediamanager'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Media Manager
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/front-cms/menu'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Menu
        </Button>
        <Button
          component={Link}
          variant='contained'
          href='/front-cms/banner'
          startIcon={<Icon icon='tabler:menu-2' />}
        >
          Banners
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

export default FrontCMSTable
