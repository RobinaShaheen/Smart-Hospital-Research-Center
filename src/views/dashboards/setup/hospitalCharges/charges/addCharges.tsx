/* eslint-disable @typescript-eslint/no-unused-vars */

// ** React Imports
'use client'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

//Dummy Data
const chargesTypes = ['select','OPD', 'IPD','Apponitment','PAthology','Radiology','Ambulance','Blood Bank','Operation','Other']
const chargesCategories = ['select', '']
const unitType = ['selsct','ML','Litter','NM','Per Day','Per Hour']
const taxCategories = ['select','Blood Module','OPD tax','IPd tax','Operation charges','Pathology tax','Radiology tax','Ambulance tax']

const AddCharges = () => {
    
  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <CustomTextField fullWidth select label='Charges Type' required>
              {chargesTypes.map(chargesType => (
              <MenuItem key={chargesType} value={chargesType}>
              {chargesType}
              </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField fullWidth select label='Charges Category' required>
              {chargesCategories.map(chargesCategorie => (
              <MenuItem key={chargesCategorie} value={chargesCategorie}>
              {chargesCategorie}
              </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField fullWidth select label='Unit Type' required>
              {unitType.map(unitType => (
              <MenuItem key={unitType} value={unitType}>
              {unitType}
              </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField fullWidth label='Charge Name' type='' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth select label='Tax Category' required>
              {taxCategories.map(taxCategory => (
              <MenuItem key={taxCategory} value={taxCategory}>
              {taxCategory}
              </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField fullWidth label='Tax' type='' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Standard Charge' type='' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }} />
            <Box >
                <Box sx={{ mb: 2 }}>
                    <Typography>Schedule Staff TPA</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                    <Button variant='contained'  sx={{ mr: 2 }}>
                      Apply to all
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}><Typography>Health Life Insurance</Typography> <CustomTextField></CustomTextField></Box>
                  <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}><Typography> Star Health Insurance</Typography><CustomTextField></CustomTextField></Box>   
                  <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}><Typography> IDBI Federal</Typography><CustomTextField></CustomTextField></Box>
                  <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}><Typography> CBHS</Typography><CustomTextField></CustomTextField></Box> 
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

export default AddCharges