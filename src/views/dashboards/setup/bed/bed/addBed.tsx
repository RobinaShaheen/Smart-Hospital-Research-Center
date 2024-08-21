/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'


const AddBed = () => {
 
  return (
    <Grid  container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Name *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth select label='Bed Type' required sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth select label='Bed Group' required sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <input type="checkbox"/> Mark as unused
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddBed
