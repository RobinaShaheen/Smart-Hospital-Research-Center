"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from 'src/@core/components/mui/text-field';
import { MenuItem, Typography } from '@mui/material';


const EmailSetting = () => {

  return (
    <Card>
      <CardContent sx={{mb: 6}}>
            <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
                Email Setting
            </Typography>
            <CustomTextField fullWidth select label="Email Engine" sx={{mb: 6}}>
                <MenuItem value='SendMail'>SendMail</MenuItem>
                <MenuItem value='SMTP'>SMTP</MenuItem>
            </CustomTextField>
            <Button variant="contained" color="primary">Save</Button>
        
        {/* Render content for other tabs as necessary */}
      </CardContent>
    </Card>
  )
}

export default EmailSetting
