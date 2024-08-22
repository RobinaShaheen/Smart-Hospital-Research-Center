/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
// "use client"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'

const AddItemSupplier = () => {
 
  return (
    <Grid  container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Name' required sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Phone' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Email' type='email' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Contact Person Name' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Address' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Contact Person Phone' required sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Contact Person Email' required sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Description' required sx={{ mb: 2 }}/>
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

export default AddItemSupplier
