
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
import { DataGrid, GridColDef, GridRowHeightReturnValue } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, Tooltip } from '@mui/material'

// ** Dummy Data
const dummyData = [
    {
        id: 1,
        ItemSupplier: 'VK Supplier',
        ContactPerson: 'Mr. Brajesh',
        Phone: '7468248735',
        Email: 'vk@gmail.com',
        Address: 'Gorakhpur'
    },
    {
        id: 2,
        ItemSupplier: 'Quick Service',
        ContactPerson: 'Vineet Gupta',
        Phone: '9896541257',
        Email: 'gk@gmail.com',
        Address: 'Sadar, Mumbai'
    }    
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
    {
        flex: 0.2,
        field: 'ItemSupplier',
        headerName: 'Item Supplier',
        minWidth: 150,
        renderCell: ({ row }: CellType) => (
          <Box>
            <Typography sx={{ color: 'text.secondary' }}>
              {row.ItemSupplier}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Icon icon='tabler:phone' fontSize={16} />
              <Typography sx={{ ml: 1 }}>{row.Phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Icon icon='tabler:mail' fontSize={16} />
              <Typography sx={{ ml: 1 }}>{row.Email}</Typography>
            </Box>
          </Box>
        )
      },
      {
        flex: 0.2,
        field: 'ContactPerson',
        headerName: 'Contact Person',
        minWidth: 150,
        renderCell: ({ row }: CellType) => (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Icon icon='tabler:user' fontSize={24}/>
                <Typography sx={{ color: 'text.secondary' }}>
                    {row.ContactPerson}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Icon icon='tabler:phone' fontSize={16} />
              <Typography sx={{ ml: 1 }}>{row.Phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Icon icon='tabler:mail' fontSize={16} />
              <Typography sx={{ ml: 1 }}>{row.Email}</Typography>
            </Box>
          </Box>
        )
      },
      {
        flex: 0.15,
        field: 'Address',
        headerName: 'Address',
        minWidth: 150,
        renderCell: ({ row }: CellType) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon='tabler:map-pin' fontSize={16} />
            <Typography sx={{ ml: 1 }}>{row.Address}</Typography>
          </Box>
        )
      },
      {
        flex: 0.1,
        field: 'Action',
        headerName: 'Action',
        minWidth: 120,
        renderCell: ({ row }: CellType) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title='Edit'>
              <IconButton size='small' onClick={() => console.log('Edit', row.id)}>
                <Icon icon='tabler:pencil' />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
              <IconButton size='small' onClick={() => console.log('Delete', row.id)}>
                <Icon icon='tabler:trash' />
              </IconButton>
            </Tooltip>
          </Box>
        )
    }
]


const ItemSupplier = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
  const getRowHeight = (): GridRowHeightReturnValue => 'auto';

  return (
    <Card>
      <CardContent>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Item Supplier List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Inventory/addItemSupplier'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Item Supplier
        </Button>
      <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
            sx={{mb: 4}}
          />
        </Box>
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
      </CardContent>
    </Card>
  )
}

export default ItemSupplier
