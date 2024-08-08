// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomTextField from 'src/@core/components/mui/text-field'
import { MenuItem } from '@mui/material'

const AddMedicine = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
          Add Medicine Details
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Medicine Name *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Medicine Category *'
                defaultValue=''
                sx={{ mb: 4 }}
              >
                <MenuItem value=''>Select</MenuItem>
                {/* Add medicine category options here */}
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Medicine Company *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Medicine Composition *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Medicine Group *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Unit *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Min Level'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Re-Order Level'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Tax (%)'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Unit/Packing *'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='VAT A/C'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Note'
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='body1' sx={{ mb: 2 }}>
                Medicine Photo ( JPG | JPEG | PNG )
              </Typography>
              <CustomTextField
                fullWidth
                type='file'
                sx={{ mb: 4 }}
              />
            </Grid>
          </Grid>
          <Button variant='contained' color='primary' fullWidth sx={{ mt: 4 }}>
            Save
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AddMedicine
