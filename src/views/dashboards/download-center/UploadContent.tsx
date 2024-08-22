
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// import MenuItem from '@mui/material/MenuItem'
// import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'

// import { File } from 'buffer'
// import { useState } from 'react'

const UploadContent = () => {
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Content Title ' required sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Content Type ' required sx={{ mb: 2 }} disabled />
            <CustomTextField fullWidth label='Date' type='datetime-local' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='2024-08-08T14:08' />
            <CustomTextField fullWidth label='Content file' required type='file' sx={{ mb: 2 }}></CustomTextField>
            <CustomTextField fullWidth label='Description' sx={{ mb: 2 }}></CustomTextField>
            
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

export default UploadContent