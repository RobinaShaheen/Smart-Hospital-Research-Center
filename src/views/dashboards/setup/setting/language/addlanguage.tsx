// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, InputAdornment, MenuItem, TextField, Tooltip } from '@mui/material'

const AddLanguage = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
      <CardContent sx={{mb: 4}}>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Add Language
        </Typography>
        <CustomTextField fullWidth label='Language' required sx={{mb: 4}}/>
        <CustomTextField fullWidth label='Short Code' required sx={{mb: 4}}/>
        <CustomTextField fullWidth label='Country Code' required sx={{mb: 4}}/>
        <Button
          component={Link}
          variant='contained'
          href=''
          sx={{mt: 4}}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default AddLanguage
