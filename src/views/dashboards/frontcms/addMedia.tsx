
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Box from '@mui/material/Box'
import CustomTextField from 'src/@core/components/mui/text-field'
import Image from 'next/image'
const AddMedia = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  
  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search By File Name...'
            onChange={e => setValue(e.target.value)}
          />
        </Box>
        <CustomTextField fullWidth label='Filter By File Type' sx={{ mb: 2 }}>
            <MenuItem value=''>Select</MenuItem>
        </CustomTextField>  
        <Image width={150} height={150} src='/images/apple-touch-icon.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/american-express.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/asana.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/behance.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/bootstrap.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/brave.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/chrome.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/dribbble.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/facebook.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/figma.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/github.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/google.png' alt='Favicon Icon'></Image>
      </CardContent>
      <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap'}}>
          <Button
            component={Link}
            variant='contained'
            href='/front-cms/addmedia'
          >
            Add
          </Button>
          <Button
            component={Link}
            variant='contained'
            href='/front-cms/addmedia'
          >
            Cancel
          </Button>
        </Box>
    </Card>
  )
}

export default AddMedia
