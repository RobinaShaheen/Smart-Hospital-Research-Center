
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
import { Typography } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//Dummy Data
const modules = ['OPD', 'IPD']
const pateintStatus = [ '']
const certificateTemplates = ['Doctor ABC','Doctor LMN','Doctor XYZ']

const AddLiveMeeting = () => {
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
            <CustomTextField fullWidth label='Meeting Title ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Meeting Date' type='datetime-local' required sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='' />
            <CustomTextField fullWidth label='Meeting Duration minutes' type='' required sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 4 }}>
                <Box sx={{mt: 4 , display:'flex'}}>
                    <Typography variant='h6' gutterBottom > Host Vedio *</Typography>
                    <Box>
                    <input type="radio" name="hostVedio" id="" />Enable
                    <input type="radio" name="hostVedio" id="" />Disable
                    </Box>
                </Box>   
                <Box sx={{mt: 4 , display:'flex'}}>
                    <Typography variant='h6' gutterBottom> Client Vedio *</Typography>
                    <Box>
                        <input type="radio" name="clientVedio" id="" />Enable
                        <input type="radio" name="clientVedio" id="" />Disable
                    </Box>
                </Box>
            </Box>
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }} />
            <Box>
                <Typography>Staff List</Typography>
                <Box>
                    <input type="checkbox" name="" id="" />Sonia Bush (Doctor : 9002)<br/>

                    <input type="checkbox" name="" id="" />Sansa Gomez (Doctor : 9008)<br/>

                    <input type="checkbox" name="" id="" />Belina Turner (Pathologist : 9005)<br/>

                    <input type="checkbox" name="" id="" />John Hook (Radiologist : 9006)<br/>

                    <input type="checkbox" name="" id="" />Brad Frost (Accountant : 9003)<br/>

                    <input type="checkbox" name="" id="" />Natasha Romanoff (Nurse : 9010)<br/>

                    <input type="checkbox" name="" id="" />Amit Singh (Doctor : 9009)<br/>

                    <input type="checkbox" name="" id="" />Reyan Jain (Doctor : 9011)<br/>

                    <input type="checkbox" name="" id="" />Harry Grant (Pharmacist : 9012)<br/>
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

export default AddLiveMeeting