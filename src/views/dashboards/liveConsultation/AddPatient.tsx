/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
'use client'
import { useState } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
//Dummy Data
const gender = ['Male','Female']
const bloodGroups = ['select','A+','A-','B+','B-','O+','O-','AB+', 'AB-']
const maritalStatus = ['select','Single','Married','Widowed','Separated','Not Spacified']
const certificateTemplates = ['Doctor ABC','Doctor LMN','Doctor XYZ']

const AddPatient = () => {
    const [value, setValue] = useState<string>('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setSelectedFile(event.target.files[0])
      }
    }
  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Name ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Guardian Name ' sx={{ mb: 2 }} />
            <CustomTextField fullWidth select label='Gender' required>
                {gender.map(gender => (
                <MenuItem key={gender} value={gender}>
                {gender}
                </MenuItem>
                ))}
            </CustomTextField>
            
            <CustomTextField fullWidth label='Date Of Birth' type='date' required sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='' />
            <Typography>Age*</Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <CustomTextField fullWidth  sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} placeholder='year'/>
            <CustomTextField fullWidth  sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} placeholder='months'/>
            <CustomTextField fullWidth  sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} placeholder='days'/>
            </Box>
            <CustomTextField fullWidth select label='Blood Group' required>
                {bloodGroups.map(bloodGroup => (
                <MenuItem key={bloodGroup} value={bloodGroup}>
                {bloodGroup}
                </MenuItem>
                ))}
            </CustomTextField>
            <CustomTextField fullWidth select label='Pateint Status'>
               {maritalStatus.map(maritalStatus => (
                    <MenuItem key={maritalStatus} value={maritalStatus}>
                    {maritalStatus}
                    </MenuItem>
                ))}
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
            <CustomTextField fullWidth label='Phone ' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Email ' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Address ' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Remarks ' multiline  sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Any Known Allergies ' multiline sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='TPA ID ' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='TPA Validity' type='date' required sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='' />
            <CustomTextField fullWidth label='National Identification Number' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Alternate Number' sx={{ mb: 2 }} />
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