
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import { FC } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CustomTextField from 'src/@core/components/mui/text-field'
import Switch from '@mui/material/Switch';
import { FormControlLabel} from '@mui/material'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import CardContent from '@mui/material/CardContent'
import PatientIdCardList from './patientIdCardList'


const IdCardTemplate = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
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

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Background Image
              </Typography>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  textAlign: 'center'
                }}
              >
                <input
                  type='file'
                  accept='image/*'
                  id='background-image'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='background-image'>
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
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Logo
              </Typography>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  textAlign: 'center'
                }}
              >
                <input
                  type='file'
                  accept='image/*'
                  id='logo'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='logo'>
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
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Signature
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
                  id='Signature'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='Signature'>
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
            <CustomTextField fullWidth label='Hospital Name *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Address/Phone/Email *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Patient ID Card Title *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Header Color' type='color' sx={{ mb: 2 }}/>
            <CustomSwitchField label='Patient Name'/><br/>
            <CustomSwitchField label='Patient Id'/><br/>
            <CustomSwitchField label='Guradian Name'/><br/>
            <CustomSwitchField label='Patient Address'/><br/>
            <CustomSwitchField label='Phone'/><br/>
            <CustomSwitchField label='Date Of Birth'/><br/>
            <CustomSwitchField label='Blood Group'/><br/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
            <PatientIdCardList/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default IdCardTemplate
