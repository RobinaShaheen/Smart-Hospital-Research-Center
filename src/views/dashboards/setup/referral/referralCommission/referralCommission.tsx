
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
    ReferralCommission: 'District Hospital (DH)',
    ModuleCommission: 'OPD - 25%\nIPD - 15%\nPharmacy - 25%\nPathology - 20%\nRadiology - 12%\nBlood Bank - 35%\nAmbulance - 15%',
    Action: ''
  },
  {
    id: 2,
    ReferralCommission: 'OPD Department',
    ModuleCommission: 'OPD - 30%\nIPD - 20%\nPharmacy - 30%\nPathology - 20%\nRadiology - 30%\nBlood Bank - 20%\nAmbulance - 10%',
    Action: '',
  },
  {
    id: 3,
    ReferralCommission: 'IPD Department',
    ModuleCommission: 'OPD - 10%\nIPD - 20%\nPharmacy - 30%\nPathology - 40%\nRadiology - 40%\nBlood Bank - 40%\nAmbulance - 40%',
    Action: ''
  },
  {
    id: 4,
    ReferralCommission: 'Clinical Services within the Community',
    ModuleCommission: 'OPD - 13%\nIPD - 12%\nPharmacy - 20%\nPathology - 32%\nRadiology - 22%\nBlood Bank - 22%\nAmbulance - 12%',
    Action: ''
  }
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'ReferralCommission',
    minWidth: 130,
    headerName: 'ReferralCommission',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ReferralCommission}</Typography>
  },
  {
    flex: 0.5,
    field: 'ModuleCommission',
    minWidth: 250,
    headerName: 'Module - Commission',
    renderCell: ({ row }) => (
      <Box sx={{ whiteSpace: 'pre-line' }}>
        <Typography sx={{ color: 'text.secondary' }}>{row.ModuleCommission}</Typography>
      </Box>
    )
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


const ReferralCommission = () => {

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
        Referral Commission List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Referral/addReferralCommission'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Referral Commission
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

export default ReferralCommission
