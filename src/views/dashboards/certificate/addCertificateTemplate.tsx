/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AddCertificateTemplate = () => {
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
          <CustomTextField fullWidth label='Certificate Template Name' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Header Left Text ' required sx={{ mb: 2 }}  />
            <CustomTextField fullWidth label='Header Center Text ' required sx={{ mb: 2 }}  />
            <CustomTextField fullWidth label='Header Right Text ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Body Text' required sx={{ mb: 2 }} multiline/>
            <CustomTextField fullWidth label='Footer Left Text ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Footer Center Text ' required sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Footer Right Text ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Header Height ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Footer Height ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Body Height ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Body Width ' required sx={{ mb: 2 }} />
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Background Image 
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

export default AddCertificateTemplate