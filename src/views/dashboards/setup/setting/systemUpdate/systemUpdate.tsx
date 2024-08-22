"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field';
import { Typography } from '@mui/material';

const SystemUpdate = () => {

  return (
    <Card>
      <CardContent  sx={{mb: 6}}>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          System Update
        </Typography>
        
        <CustomTextField fullWidth placeholder='Your Smart Hospital Version 4.0'/>

        {/* Render content for other tabs as necessary */}
      </CardContent>
    </Card>
  )
}

export default SystemUpdate
