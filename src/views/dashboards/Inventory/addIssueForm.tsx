/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
const AddIssueForm = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField
              select
              fullWidth
              label='User Type *'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value=''>Select</MenuItem>
              {/* Add Item options here */}
            </CustomTextField>
            <CustomTextField fullWidth label='Issue To *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Issued By *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Issue Date *' type='datetime-local' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Return Date' type='datetime-local' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Note' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Item Category *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>    
            <CustomTextField fullWidth label='Item *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>    
            <CustomTextField fullWidth label='Quantity' type='number' sx={{ mb: 2 }}/>
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

export default AddIssueForm
