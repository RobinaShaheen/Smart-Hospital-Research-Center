
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

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Title: 'Main Menu',
    Action: ''
  },
  {
    id: 2,
    Title: 'Bottom Menu',
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
    field: 'Action',
    minWidth: 150,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Add Menu Item'>
                <IconButton size='small' onClick={()=>console.log('edit', row.id)}>
                    <Icon icon='tabler:plus'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
    )
  }
]

const Menu = () => {

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button
          component={Link}
          variant='contained'
          href='/front-cms/add-menu'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Menu
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

export default Menu
