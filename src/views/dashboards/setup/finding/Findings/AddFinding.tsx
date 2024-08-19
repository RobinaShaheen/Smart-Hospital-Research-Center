/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'

const categories = ['Syrup','Capsule','Tablet','Injection','Inhaler']

const AddFinding= () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <CustomTextField fullWidth label='Finding' required sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth select label='Category' required>
                {categories.map(category => (
                    <MenuItem key={category} value={category}>
                    {category}
                    </MenuItem>
                ))}
            </CustomTextField>
            <CustomTextField fullWidth label='Description' multiline required sx={{ mb: 2 }}></CustomTextField>
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

export default AddFinding