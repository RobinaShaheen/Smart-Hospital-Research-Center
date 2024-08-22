
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
import { DataGrid, GridColDef, GridRowHeightParams, GridRowHeightReturnValue } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, Tooltip } from '@mui/material'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    ParameterName: 'RBC',
    ReferenceRange: '4.1 to 5.1 million/mm3',
    Unit: 'million/mm3',
    Description: 'RBC Blood Test',
    Action: ''
  },
  {
    id: 2,
    ParameterName: 'Liver Function Test',
    ReferenceRange: '	7 to 55 units per liter',
    Unit: '(U/L)',
    Description: 'Liver function tests (LFTs or LFs), also referred to as a hepatic panel, are groups of blood tests ... ranges are given, these will vary depending on age, gender and his/her health, ethnicity, method of analysis, and units of measurement.',
    Action: ''
  },
  {
    id: 3,
    ParameterName: 'TSH (Thyroid Stimulating Hormone)',
    ReferenceRange: '0.5 t0 3.0',
    Unit: '(U/L)',
    Description: 'A TSH level > 20 milli-International Units/L in association with a low free thyroxine (T4) confirms the diagnosis of hypothyroidism.',
    Action: ''
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'ParameterName',
    minWidth: 130,
    headerName: 'Parameter Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ParameterName}</Typography>
  },
  {
    flex: 0.2,
    field: 'ReferenceRange',
    minWidth: 130,
    headerName: 'Reference Range',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ReferenceRange}</Typography>
  },
  {
    flex: 0.2,
    field: 'Unit',
    minWidth: 130,
    headerName: 'Unit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Unit}</Typography>
  },
  {
    flex: 0.2,
    field: 'Description',
    minWidth: 130,
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Description}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) =>(
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Edit'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:pencil'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:trash'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
        
    )
  }
]


const PathologyParameter = () => {

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
        Pathology Parameter List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Pathology/addPathologyParameter'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Pathology Parameter
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

export default PathologyParameter
