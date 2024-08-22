
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
'use client'
import React, { useState } from 'react';
import 'quill/dist/quill.snow.css'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('./textEditor'), { ssr: false });

//Dummy Data
const BirthRecord = () => {
    
  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <Image src='/images/header/9.png' alt='img4' width={600} height={150} />
            <Typography sx={{color:'black'}}>Footer Content</Typography>
            <TextEditor />
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

export default BirthRecord