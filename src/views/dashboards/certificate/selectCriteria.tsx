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
const modules = ['OPD', 'IPD']
const pateintStatus = [ 'Discharge', 'Not Discharge']
const certificateTemplates = ['Sample Patient File Cover']

const SelectCriteria = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false)

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant='h6'>Search Criteria</Typography>
          <Button
            component={Link}
            href='/certificate/Certificate/certificateTemplate'
            variant='contained'
            startIcon={<Icon icon='tabler:receipt' />}
          >
            Certificate Template
          </Button>
        </Box>
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

          <Grid item xs={12} md={6}>
            <TextField fullWidth select label='Certificate Template'>
              {certificateTemplates.map(certificateTemplate => (
                <MenuItem key={certificateTemplate} value={certificateTemplate}>
                  {certificateTemplate}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid> 
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button variant='contained' color='primary'  >
            Search
          </Button>
        </Box> 
      </CardContent>
    </Card>
  )
}

export default SelectCriteria
