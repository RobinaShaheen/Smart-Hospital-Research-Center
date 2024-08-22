
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AddNewPatient = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Name' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Guardian Name' sx={{ mb: 2 }} />
            <CustomTextField
              select
              fullWidth
              label='Gender'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Male'>Male</MenuItem>
              <MenuItem value='Female'>Female</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Date Of Birth' type='date' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <CustomTextField fullWidth label='Year' sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={4}>
                <CustomTextField fullWidth label='Month' sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={4}>
                <CustomTextField fullWidth label='Day' sx={{ mb: 2 }} />
              </Grid>
            </Grid>
            <CustomTextField
              select
              fullWidth
              label='Blood Group'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='A+'>A+</MenuItem>
              <MenuItem value='A-'>A-</MenuItem>
              <MenuItem value='B+'>B+</MenuItem>
              <MenuItem value='B-'>B-</MenuItem>
              <MenuItem value='AB+'>AB+</MenuItem>
              <MenuItem value='AB-'>AB-</MenuItem>
              <MenuItem value='O+'>O+</MenuItem>
              <MenuItem value='O-'>O-</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Marital Status'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value='Single'>Single</MenuItem>
              <MenuItem value='Married'>Married</MenuItem>
              <MenuItem value='Divorced'>Divorced</MenuItem>
              <MenuItem value='Widowed'>Widowed</MenuItem>
            </CustomTextField>
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Patient Photo
              </Typography>
              <Box
                sx={{
                  border: '1px dashed',
                  borderColor: 'divider',
                  borderRadius: 1,
                  p: 2,
                  textAlign: 'center'
                }}
              >
                <input
                  type='file'
                  accept='image/*'
                  id='patient-photo'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='patient-photo'>
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
            <CustomTextField fullWidth label='Phone' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Email' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Address' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Remarks' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Any Known Allergies' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='TPA ID' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='TPA Validity' type='date' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
            <CustomTextField fullWidth label='National Identification Number' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Alternate Number' sx={{ mb: 2 }} />
            <Button fullWidth variant='contained' sx={{ mt: 4 }}>
              Add New Patient
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddNewPatient
