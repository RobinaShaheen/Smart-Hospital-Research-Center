
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Dummy Data for Dropdowns
const roles = ['Doctor', 'Nurse', 'Technician', 'Other']
const designations = ['Consultant', 'Senior Nurse', 'Junior Technician']
const departments = ['Cardiology', 'Neurology', 'Radiology']
const specialists = ['Cardiologist', 'Neurologist', 'Radiologist']
const genders = ['Male', 'Female', 'Other']
const maritalStatuses = ['Single', 'Married', 'Divorced']
const bloodGroups = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']

const AddStaff = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false)

  return (
    
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant='h6'>Add Staff</Typography>
          <Button
            component={Link}
            href='/human-resource/import'
            variant='contained'
            startIcon={<Icon icon='tabler:upload' />}
          >
            Import Staff
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Staff ID' required />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Role' required>
              {roles.map(role => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Designation'>
              {designations.map(designation => (
                <MenuItem key={designation} value={designation}>
                  {designation}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Department'>
              {departments.map(department => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Specialist'>
              {specialists.map(specialist => (
                <MenuItem key={specialist} value={specialist}>
                  {specialist}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='First Name' required />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Last Name' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Father Name' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Mother Name' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Gender' required>
              {genders.map(gender => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Marital Status'>
              {maritalStatuses.map(status => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Blood Group'>
              {bloodGroups.map(group => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth type='date' label='Date Of Birth' InputLabelProps={{ shrink: true }} required />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth type='date' label='Date Of Joining' InputLabelProps={{ shrink: true }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Phone' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Emergency Contact' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Email' type='email' required />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth multiline rows={2} label='Current Address' />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth multiline rows={2} label='Permanent Address' />
          </Grid>

          {showMoreDetails && (
            <>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Qualification' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Work Experience' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Specialization' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Note' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Pan Number' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='National Identification Number' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Local Identification Number' />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Reference Contact' />
              </Grid>
            </>
          )}
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='contained' onClick={() => setShowMoreDetails(!showMoreDetails)}>
            {showMoreDetails ? 'Hide Details' : 'Add More Details'}
          </Button>
          <Button variant='contained' color='primary'>
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddStaff
