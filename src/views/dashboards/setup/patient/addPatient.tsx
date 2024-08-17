/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const AddPatient = () => {
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
            <CustomTextField fullWidth label='Name *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Guardian Name' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Gender' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Date Of Birth' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Age' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Blood Group' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Marital Status' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Patient Photo
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
            <CustomTextField fullWidth label='Phone' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Email'  sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Address' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Remarks' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Any Know Allergies' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='TPA ID' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='TPA Validity' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='National Identification Number' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Alternate Number' sx={{ mb: 2 }}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddPatient
