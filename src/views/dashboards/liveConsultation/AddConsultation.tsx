/* eslint-disable @typescript-eslint/no-unused-vars */

// ** React Imports
'use client'
import { useState } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//Dummy Data
const modules = ['OPD', 'IPD']
const pateintStatus = [ '']
const certificateTemplates = ['Doctor ABC','Doctor LMN','Doctor XYZ']

const AddConsultation = () => {
    const [value, setValue] = useState<string>('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button
            component={Link}
            href='/liveConsultation/LiveConsultation/addPatient'
            variant='contained'
            startIcon={<Icon icon='tabler:plus' />}
          >
            New Patient
          </Button>
        </Box>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Consultation Title ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Consultation Date' type='datetime-local' required sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='' />
            <CustomTextField fullWidth label='Consultation Duration minutes' type='' required sx={{ mb: 2 }} />
            <Grid container spacing={4} display={'flex'}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth select label='Module' required>
                    {modules.map(module => (
                        <MenuItem key={module} value={module}>
                        {module}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField fullWidth select label='Pateint Status'>
                    {pateintStatus.map(pateintState => (
                        <MenuItem key={pateintState} value={pateintState}>
                        {pateintState}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
            </Grid> 
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <TextField fullWidth select label='Consultant Doctor' required>
                {certificateTemplates.map(certificateTemplate => (
                <MenuItem key={certificateTemplate} value={certificateTemplate}>
                  {certificateTemplate}
                </MenuItem>
                ))}
                </TextField>
            </Box> 
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 4 }}>
                <Box sx={{mt: 4 }}>
                    <Typography variant='h6' gutterBottom > Host Vedio *</Typography>
                    <input type="radio" name="hostVedio" id="" />Enable
                    <input type="radio" name="hostVedio" id="" />Disable
                </Box>   
                <Box sx={{mt: 4 }}>
                    <Typography variant='h6' gutterBottom> Client Vedio *</Typography>
                    <input type="radio" name="clientVedio" id="" />Enable
                    <input type="radio" name="clientVedio" id="" />Disable
                </Box>
            </Box>
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }} />
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

export default AddConsultation