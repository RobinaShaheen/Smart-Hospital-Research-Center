// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'
import { FC } from 'react'
// ** MUI Imports
import Image from 'next/image'
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
import { FormControlLabel, IconButton, InputAdornment, MenuItem, Switch, TextField, Tooltip } from '@mui/material'
// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Name: 'GF - 101',
    BedType: 'Standard',
    BedGroup: 'VIP Ward',
    Floor: 'Ground Floor',
    Status: 'Alloted'
  },
  {
    id: 2,
    Name: 'GF - 119',
    BedType: 'VIP',
    BedGroup: 'VIP Ward',
    Floor: 'Ground Floor',
    Status: 'Available'
  },
  {
    id: 3,
    Name: 'TF - 103',
    BedType: 'Normal',
    BedGroup: 'Private Ward',
    Floor: '3rd Floor',
    Status: 'Available'
  },
  {
    id: 4,
    Name: 'TF - 106',
    BedType: 'VIP',
    BedGroup: 'General Ward Male',
    Floor: '3rd Floor',
    Status: 'Alloted'
  },
  {
    id: 5,
    Name: 'SF - 105',
    BedType: 'Standard',
    BedGroup: 'ICU',
    Floor: '2nd Floor',
    Status: 'Available'
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Name',
    minWidth: 130,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Name}</Typography>
  },
  {
    flex: 0.2,
    field: 'BedType',
    minWidth: 130,
    headerName: 'Bed Type',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BedType}</Typography>
  },
  {
    flex: 0.2,
    field: 'BedGroup',
    minWidth: 130,
    headerName: 'Bed Group',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BedGroup}</Typography>
  },
  {
    flex: 0.2,
    field: 'Floor',
    minWidth: 130,
    headerName: 'Floor',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Floor}</Typography>
  },
  {
    flex: 0.15,
    field: 'Status',
    minWidth: 120,
    headerName: 'Status',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Status}</Typography>
  }
]


const BedStatus = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Bed Status
      </Typography>
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
          rowHeight={54}
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

export default BedStatus
