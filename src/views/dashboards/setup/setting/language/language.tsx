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
    Hash: 1,
    Language: 'Afrikaans',
    ShortCode: 'af',
    CountryCode: 'af',
    Status: '',
    Active: '',
    IsRTL: '',
    Action: '',
    flag: '/images/sf.png'
  },
  {
    id: 2,
    Hash: 2,
    Language: 'Albanian',
    ShortCode: 'sq',
    CountryCode: 'al',
    Status: '',
    Active: '',
    IsRTL: '',
    Action: '',
    flag: '/images/al.png'
  },
  {
    id: 3,
    Hash: 3,
    Language: 'Amharic',
    ShortCode: 'am',
    CountryCode: 'am',
    Status: '',
    Active: '',
    IsRTL: '',
    Action: '',
    flag: '/images/download.png'
  },
  {
    id: 4,
    Hash: 4,
    Language: 'Arabic',
    ShortCode: 'ar',
    CountryCode: 'sa',
    Status: '',
    Active: '',
    IsRTL: '',
    Action: '',
    flag: '/images/ar.png'
  },
  {
    id: 5,
    Hash: 5,
    Language: 'Azerbaijan',
    ShortCode: 'az',
    CountryCode: 'az',
    Status: '',
    Active: '',
    IsRTL: '',
    Action: '',
    flag: '/images/az.png'
  },
]


interface CellType {
  row: typeof dummyData[0]
}

interface CustomSwitchFieldProps {
  label: string
}

const CustomSwitchField: FC<CustomSwitchFieldProps> = ({ label }) => (
  <FormControlLabel
      control={<Switch />}
      label={label}
      sx={{ mb: 2 }}
  />
);


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Hash',
    minWidth: 130,
    headerName: '#',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Hash}</Typography>
  },
  {
    flex: 0.2,
    field: 'Language',
    minWidth: 130,
    headerName: 'Language',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={row.flag}
          alt={`${row.Language} flag`}
          width={24}
          height={16}
        />
        <Typography sx={{ color: 'text.secondary' }}>{row.Language}</Typography>
      </Box>
    )
  },
  {
    flex: 0.2,
    field: 'ShortCode',
    minWidth: 130,
    headerName: 'Short Code',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.ShortCode}</Typography>
  },
  {
    flex: 0.2,
    field: 'CountryCode',
    minWidth: 130,
    headerName: 'CountryCode',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.CountryCode}</Typography>
  },
  {
    flex: 0.2,
    field: 'Status',
    minWidth: 130,
    headerName: 'Status',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Status}</Typography>
  },
  {
    flex: 0.2,
    field: 'Active',
    minWidth: 130,
    headerName: 'Active',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Active}</Typography>
  },
  {
    flex: 0.2,
    field: 'IsRTL',
    minWidth: 130,
    headerName: 'IsRTL',
    renderCell: ({ row }: CellType) => (
      <input type="checkbox"/>
    )
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
      <CustomSwitchField label=''/>
    )
  }
]


const Languages = () => {

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
          Language List
        </Typography>
        <Button
          component={Link}
          variant='contained'
          href='/Setup/Setting/addLanguage'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add
        </Button>
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

export default Languages
