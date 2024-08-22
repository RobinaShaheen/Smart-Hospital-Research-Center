
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'

const AddItemStock = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  return (

    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField
              select
              fullWidth
              label='Item Inventory *'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value=''>Select</MenuItem>
              
              {/* Add patient options here */}
            </CustomTextField>
            <CustomTextField fullWidth select label='Item *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth select label='Supplier *' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth select label='Store' sx={{ mb: 2 }}>
                <MenuItem value=''>Select</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth select label='Quantity *' sx={{ mb: 2 }}>
                <MenuItem value=''>+</MenuItem>
                <MenuItem value=''>-</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Purchase Price *' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Date' type='datetime-local' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='2024-10-08T14:08' />
            <CustomTextField fullWidth label='Description' sx={{ mb: 2 }}/>
            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Attach Document
              </Typography>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  textAlign: 'center'
                }}
              >
                <input
                  type='file'
                  accept='image/*'
                  id='patient-photo'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor='patient-photo'>
                  <IconButton component='span'>
                    <Icon icon='tabler:upload' fontSize='2rem' />
                  </IconButton>
                </label>
                {selectedFile ? (
                  <Typography variant='body2'>{selectedFile.name}</Typography>
                ) : (
                  <Typography variant='body2'>Drop a file here or click</Typography>
                )}
              </Box>
            </Box>
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

export default AddItemStock
