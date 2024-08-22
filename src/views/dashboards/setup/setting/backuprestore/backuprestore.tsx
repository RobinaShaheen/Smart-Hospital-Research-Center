
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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-47.sql',
    Action: '',
  },
  {
    id: 2,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-58.sql',
    Action: '',
  },
  {
    id: 3,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-53.sql',
    Action: '',
  },
  {
    id: 4,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-30.sql',
    Action: '',
  },
  {
    id: 5,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-41.sql',
    Action: '',
  },
  {
    id: 6,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-40.sql',
    Action: '',
  },
  {
    id: 7,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-32.sql',
    Action: '',
  },
  {
    id: 8,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-07.sql',
    Action: '',
  },
  {
    id: 9,
    BackupFiles: 'db_ver_4.0_2024-04-11_12-31-30.sql',
    Action: '',
  },
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'BackupFiles',
    minWidth: 130,
    headerName: 'Backup Files',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.BackupFiles}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Download'>
                <IconButton size='small' onClick={()=>console.log('Download', row.id)}>
                    <Icon icon='tabler:download'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Restore'>
                <IconButton size='small' onClick={()=>console.log('Restore', row.id)}>
                    <Icon icon='tabler:restore'></Icon>
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


const BackupRestore = () => {

const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }
  
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Backup History
        </Typography>
        <Button
          component={Link}
          variant='contained'
          href=''
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Create Backup
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
    <CardContent>
        <Box sx={{ mb: 2 }}>
            <Typography variant='h4' sx={{ mb: 1 }}>
                Upload From Local Directory
            </Typography>
            <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  textAlign: 'center'
                }}
            >
                <input
                  type='file'
                  accept='image/*'
                  id='localDirectory'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='localDirectory'>
                  <IconButton component='span'>
                    <Icon icon='tabler:upload' fontSize='2rem' />
                  </IconButton>
                </label>
                {selectedFile ? (
                  <Typography variant='body2'>{selectedFile.name}</Typography>
                ) : (
                  <Typography variant='body2'>Drop a file here or click</Typography>
                )}
            </Box>
        </Box>
        <Button
          component={Link}
          variant='contained'
          href=''
          startIcon={<Icon icon='tabler:upload' />}
        >
          Upload
        </Button>
    </CardContent>
    <CardContent>
        <Typography variant='h4' sx={{ mb: 1 }}>
            Cron Secret Key
        </Typography>
        <TextField
            // label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                    <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                    </IconButton>
                </InputAdornment>
                )
            }}
        /><br/>
        <Button
          component={Link}
          variant='contained'
          href=''
          sx={{mt: 4}}
        >
          Regenerate
        </Button>
      </CardContent>
    </Card>
  )
}

export default BackupRestore
