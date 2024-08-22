/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

const fieldTypes = ['Checkbox','Color Picker','Date Picker','Date Time Picker','input']
const fieldBelongsTo = ['Ambulance Call','Appointment','Birth Record','Blood Issue','Component Issue','Death Recoed']

const AddcustomField= () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth select label='Field Belongs To' required>
            {fieldBelongsTo.map(field => (
                    <MenuItem key={field} value={field}>
                    {field}
                    </MenuItem>
                ))}
            </CustomTextField>
            <CustomTextField fullWidth select label='Field Type' required>
                {fieldTypes.map(fieldType => (
                    <MenuItem key={fieldType} value={fieldType}>
                    {fieldType}
                    </MenuItem>
                ))}
            </CustomTextField>
            <CustomTextField fullWidth label='Field Name' required sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Grid (Bootstrap Column e.g. 6) - Max is 12' required sx={{mb:2}}></CustomTextField>
            <CustomTextField fullWidth label='Field Values (Separate By Comma)' multiline required sx={{mb:2}}></CustomTextField>
            <Box><Typography>Validations</Typography>
            <CustomTextField fullWidth sx={{mb:2}}><input type='checkbox'/>Required</CustomTextField></Box>
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }}>
                <input type="checkbox" name="" id="" />On Table<br/>
                <input type="checkbox" name="" id="" />On Print<br/>
                <input type="checkbox" name="" id="" />On Report<br/>
                <input type="checkbox" name="" id="" />On Patient Panel<br/>
            </CustomTextField>
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

export default AddcustomField