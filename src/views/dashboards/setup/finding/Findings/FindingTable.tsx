
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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    finding: 'BILL-001',
    category: 'CASE-001',
    findingDescription: '2024-08-01'
  },
  {
    id: 2,
    finding: 'BILL-002',
    category: 'CASE-002',
    findingDescription: '2024-08-02',
  },
  {
    id: 3,
    finding: 'BILL-003',
    category: 'CASE-003',
    findingDescription: '2024-08-03'
  }
]

interface CellType {
  row: typeof dummyData[0]
}

const defualtcolumns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'finding',
    minWidth: 130,
    headerName: 'Finding',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.finding}</Typography>
  },
  {
    flex: 0.2,
    field: 'category',
    minWidth: 130,
    headerName: 'Category',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.category}</Typography>
  },
  {
    flex: 0.2,
    field: 'findingDescription',
    minWidth: 130,
    headerName: 'Finding Description',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.findingDescription}</Typography>
  }

]


const FindingTable = () => {
  
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns: GridColDef[] = [
    ...defualtcolumns,
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
          <Tooltip title='Edit Content'>
            <IconButton size='small' onClick={() => console.log('Edit', row.id)}>
              <Icon icon='tabler:edit' />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
]

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
          href='/setup/finding/finding/AddFindings'
          startIcon={<Icon icon='tabler:plus' />}
        >
          Add Finding
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

export default FindingTable
