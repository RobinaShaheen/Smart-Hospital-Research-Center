
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'

const AddShift= () => {

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>

                <CustomTextField fullWidth label='Name' required sx={{ mb: 2 }}></CustomTextField>
                <CustomTextField fullWidth select label='Time From' required></CustomTextField>
                <CustomTextField fullWidth select label='Time To' required></CustomTextField>

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

export default AddShift