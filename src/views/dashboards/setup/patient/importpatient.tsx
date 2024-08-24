
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
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, MenuItem } from '@mui/material'


// ** Dummy Data
const dummyData = [
  {
    id: 1,
    Patient: 'Sample data',
    Guardian: 'Sample data',
    Gender: 'Sample data',
    Age: 'Sample data',
    MaritalStatus: 'Sample data',
    Phone: 'Sample data',
    Email: 'Sample data',
    Address: 'Sample data',
    Remarks: 'Sample data',
    KnowAllergies: 'Sample data',
    IdentificationNumber: 'Sample data',
    TPAID: 'Sample data',
    TPAValidity: 'Sample data'
  }
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'Patient',
    minWidth: 130,
    headerName: '*Patient',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Patient}</Typography>
  },
  {
    flex: 0.2,
    field: 'Guardian',
    minWidth: 130,
    headerName: 'Guardian',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Guardian}</Typography>
  },
  {
    flex: 0.2,
    field: 'Gender',
    minWidth: 130,
    headerName: 'Gender',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Gender}</Typography>
  },
  {
    flex: 0.2,
    field: 'Age',
    minWidth: 150,
    headerName: 'Age',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Age}</Typography>
  },
  {
    flex: 0.2,
    field: 'MaritalStatus',
    minWidth: 150,
    headerName: 'Marital Status',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.MaritalStatus}</Typography>
  },
  {
    flex: 0.2,
    field: 'Phone',
    minWidth: 150,
    headerName: 'Phone',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Phone}</Typography>
  },
  {
    flex: 0.2,
    field: 'Email',
    minWidth: 150,
    headerName: 'Email',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Email}</Typography>
  },
  {
    flex: 0.2,
    field: 'Address',
    minWidth: 150,
    headerName: 'Address',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Address}</Typography>
  },
  {
    flex: 0.15,
    field: 'Remarks',
    minWidth: 120,
    headerName: 'Remarks',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.Remarks}</Typography>
  },
  {
    flex: 0.15,
    field: 'KnowAllergies',
    minWidth: 120,
    headerName: 'KnowAllergies',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.KnowAllergies}</Typography>
  },
  {
    flex: 0.15,
    field: 'IdentificationNumber',
    minWidth: 120,
    headerName: 'Identification Number',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.IdentificationNumber}</Typography>
  },
  {
    flex: 0.15,
    field: 'TPAID',
    minWidth: 120,
    headerName: 'TPAID',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.TPAID}</Typography>
  },
  {
    flex: 0.15,
    field: 'TPAValidity',
    minWidth: 120,
    headerName: 'TPA Validity',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.TPAValidity}</Typography>
  },
]


const ImportPatient = () => {

const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent>
        <Button
          component={Link}
          variant='contained'
          href='/Setup/PatientSetup/ImportPatient'
          startIcon={<Icon icon='tabler:download' />}
          sx={{mb: 4}}
        >
          Download Sample Data
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
        <Box sx={{display: 'flex', width: '100%'}}>
          <CustomTextField fullWidth select label='Blood Group' sx={{ mb: 2 }}>
              <MenuItem value=''>Select</MenuItem>
          </CustomTextField>
            <Box sx={{ mb: 2, width: '100%', ml: 4}}>
                <Typography variant='body2'>
                  Select CSV File *
                </Typography>
                <Box
                  sx={{
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    textAlign: 'center',
                    padding: '2px'
                  }}
                >
                  <Box sx={{display: 'flex'}}>
                    <input
                      type='file'
                      accept='image/*'
                      id='patient-photo'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <label htmlFor='patient-photo'>
                      <IconButton component='span'>
                        <Icon icon='tabler:upload' fontSize='1rem' />
                      </IconButton>
                    </label>
                    {selectedFile ? (
                    <Typography variant='body2'>{selectedFile.name}</Typography>
                      ) : (
                    <Typography variant='body2' sx={{mt: 4}}>Drop a file here or click</Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
                component={Link}
                variant='contained'
                href='/Setup/ImportPatient'
                startIcon={<Icon icon='tabler:upload' />}
                >
                Import
            </Button>
      </CardContent>
    </Card>
  )
}

export default ImportPatient
