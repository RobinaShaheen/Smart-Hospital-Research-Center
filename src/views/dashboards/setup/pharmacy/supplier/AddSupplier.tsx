/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'


const AddSupplier = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Supplier Name' required sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Supplier Contact '  sx={{ mb: 2 }} ></CustomTextField>
            <CustomTextField fullWidth label='Contact Person Name' sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Contact Person Phone' sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Drug License Number' sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Address' sx={{ mb: 2 }}></CustomTextField>
            
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

export default AddSupplier