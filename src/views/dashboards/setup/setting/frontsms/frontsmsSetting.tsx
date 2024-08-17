"use client";
import { FC } from 'react'
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image';
import Button from '@mui/material/Button'
import CustomTextField from 'src/@core/components/mui/text-field';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import CurrentTheme from './currentTheme';

interface CustomSwitchFieldProps {
  label: string
}

const CustomSwitchField: FC<CustomSwitchFieldProps> = ({ label }) => (
  <FormControlLabel
      control={<Switch />}
      label={label}
      sx={{ mb: 2 }}
  />
);

const FrontCMSSetting = () => {


  return (
    <Card>
      <CardContent  sx={{mb: 6}}>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Front CMS Setting
        </Typography>
        <CustomSwitchField label='Front CMS' /><br/>
        <CustomSwitchField label='Online Appointment' /><br/>
        <CustomSwitchField label='Sidebar' /><br/>
        <CustomSwitchField label='Language RTL Text Mode' /><br/>
        <label htmlFor="Sidebar Option">Sidebar Option</label>
        <input type="checkbox" />News
        <input type="checkbox"/>Complain
        <CustomTextField fullWidth label='Facebook URL' placeholder='https://www.facebook.com/login' sx={{ mb: 2, mt: 4 }}/>
        <CustomTextField fullWidth label='Twitter URL' placeholder='https://twitter.com/login?lang=en' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Youtube URL' placeholder='https://www.youtube.com/account' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Google Plus URL' placeholder='https://plus.google.com/people' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Linkedin URL' placeholder='https://www.linkedin.com/uas/login?_l=en' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Instagram URL' placeholder='https://www.instagram.com/accounts/login/' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Pinterest URL' placeholder='https://in.pinterest.com/login/' sx={{ mb: 2 }}/>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
            <label htmlFor="Logo (369px X 76px) ">Logo (369px X 76px)</label>
            <Image src='/images/front_logo.png' width={369} height={76} alt='' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
            <label htmlFor="Favicon (32px X 32px) ">Favicon (32px X 32px)</label>
            <Image src='/images/front_logo.png' width={32} height={32} alt='' />
        </Box>
        <CustomTextField fullWidth label='Footer Text' placeholder='© Smart Hospital & Research Center 2024 All rights reserved' sx={{ mb: 2 }}/>
        <CustomTextField fullWidth label='Google Analytics' 
            placeholder='
                <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}'
                sx={{ mb: 2 }}
        />
        <CurrentTheme/>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button variant='contained' sx={{ mr: 2 }}>
                Save
            </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FrontCMSSetting
