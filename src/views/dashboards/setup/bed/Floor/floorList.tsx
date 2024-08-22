
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
    Floor: '4th Floor',
    Description: 'The coronary/cardiac care unit (CCU) is a specialized intensive care unit for cardiac issues. If you have heart disease, experienced a cardiac event such as a heart attack, or if you are recovering from open-heart surgery, you may be treated in the CCU. In some facilities, a separate open-heart recovery unit may be utilized for surgical patients.',
    Action: ''
  },
  {
    id: 2,
    Floor: '3rd Floor',
    Description: 'A palliative or hospice unit is where end-of-life care is provided if you have a life-limiting illness, which may or may not be cancer-related. Hospice and palliative care focus on providing comfort and quality of life. In some facilities, oncology and hospice/palliative care may be provided in the same unit',
    Action: ''
  },
  {
    id: 3,
    Floor: '2nd Floor',
    Description: 'The pediatric intensive care unit (PICU) where children receive critical care. Depending on the facility, newborns may be treated in a PICU or a neonatal ICU. Smaller facilities may have a PICU only, while larger facilities may offer both a PICU and a neonatal ICU.',
    Action: ''
  },
  {
    id: 4,
    Floor: '1st Floor',
    Description: 'Neonatal intensive care units (NICUs) which provide care for newborn infants.',
    Action: ''
  },
  {
    id: 5,
    Floor: 'Ground Floor',
    Description: 'A good choice here would be luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, rubber, or linoleum.',
    Action: ''
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Floor',
    minWidth: 130,
    headerName: 'Floor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Floor}</Typography>
  },
  {
    flex: 0.2,
    field: 'Description',
    minWidth: 200,
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography variant="h6" sx={{ color: 'text.secondary' }}>{row.Description}</Typography>
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


const FloorList = () => {

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
        Floor List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Bed/addFloor'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Floor
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

export default FloorList
