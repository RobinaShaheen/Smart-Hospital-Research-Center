/* eslint-disable @typescript-eslint/no-unused-vars */

// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { Typography } from '@mui/material'

const TextEditor = dynamic(() => import('./textEditor'), { ssr: false });
//Dummy Data
const IPDPrescription = () => {
    const [value, setValue] = useState<string>('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <Image src='/images/header/3.png' alt='img1' width={600} height={150} />
            <Typography  sx={{color:'black'}}>Footer Content</Typography>
            <TextEditor/>
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

export default IPDPrescription