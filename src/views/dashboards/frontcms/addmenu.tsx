
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Link from 'next/link'

const AddMenu = () => {

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Menu *' sx={{ mb: 4 }}/>
            <CustomTextField fullWidth label='Description' sx={{ mb: 2, mt: 4 }}/>
            <Button
                component={Link}
                variant='contained'
                href='/front-cms/add-menu'
            >
                Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddMenu
