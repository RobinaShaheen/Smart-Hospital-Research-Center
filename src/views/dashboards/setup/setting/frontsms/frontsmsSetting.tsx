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
import { style, width } from '@mui/system';

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
        <Box sx={{display: 'flex', width: '60%', justifyContent: 'space-between', alignItems: 'center', ml: 50}}>
          <CustomSwitchField label='Front CMS'/>
          <CustomTextField label='Facebook URL' placeholder='https://www.facebook.com/login' sx={{ mb: 2, mt: 4}}/>
        </Box>
        <Box sx={{display: 'flex', width: '60%', justifyContent: 'space-between', alignItems: 'center', ml: 50}}>
          <CustomSwitchField label='Online Appointment' />
          <CustomTextField fullWidth label='Twitter URL' placeholder='https://twitter.com/login?lang=en' sx={{ mb: 2, ml: 50}}/>
        </Box>
        <Box sx={{display: 'flex', width: '70%', justifyContent: 'space-between', alignItems: 'center', ml: 50}}>
          <CustomSwitchField label='Sidebar' />
          <CustomTextField fullWidth label='Youtube URL' placeholder='https://www.youtube.com/account' sx={{ mb: 2, ml: 60}}/>
        </Box>
        <Box sx={{display: 'flex', width: '70%', justifyContent: 'space-between', alignItems: 'center', ml: 50}}>
          <CustomSwitchField label='Language RTL Text Mode' />
          <CustomTextField fullWidth label='Google Plus URL' placeholder='https://plus.google.com/people' sx={{ mb: 2, ml: 57}}/>
        </Box>
        <Box sx={{display: 'flex', width: '80%', justifyContent: 'space-between', alignItems: 'center', ml: 32}}>
          <Box sx={{display: 'flex', width: '80%', justifyContent: 'space-between', justifyItems: 'center'}}>
            <label htmlFor="Sidebar Option">Sidebar Option</label>
            <input type="checkbox"/>News
            <input type="checkbox"/>Complain
          </Box>
          <CustomTextField fullWidth label='Linkedin URL' placeholder='https://www.linkedin.com/uas/login?_l=en' sx={{ mb: 2, ml: 40}}/>
        </Box>
        <Box sx={{display:'flex', width: '90%'}}>
          <Box sx={{ display: 'flex', width: '95%'}}>
              <label htmlFor="Logo (369px X 76px)" style={{marginTop: '40px'}}>Logo (369px X 76px)</label>
              <Image src='/images/front_logo.png' width={369} height={76} alt='' style={{marginLeft: '20px', border: '1px solid', borderColor: 'lightgray',  padding: '20px', margin: '30px'}}/>
          </Box>
          <Box>
            <CustomTextField fullWidth label='Instagram URL' placeholder='https://www.instagram.com/accounts/login/' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Pinterest URL' placeholder='https://in.pinterest.com/login/' sx={{ mb: 2 }}/>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '95%'}}>
            <label htmlFor="Favicon (32px X 32px) ">Favicon (32px X 32px)</label>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '20px',
              width: '365px',
              height: '50px',
              border: '2px solid lightgray', // Increase border width here
              padding: '20px', // This controls the size of the border area
              margin: '10px'
            }}>
              <Image
                  src='/images/front_fav_icon.png'
                  width={32}
                  height={32}
                  alt='Favicon'
                  style={{ display: 'block' }}
              />
            </div>
        </Box>
        <Box sx={{ width: '50%', ml: 40 }}>
          <CustomTextField
            fullWidth
            label='Footer Text'
            placeholder='© Smart Hospital & Research Center 2024 All rights reserved'
            sx={{ mb: 2 }}
          />
          <CustomTextField
            fullWidth
            label='Google Analytics'
            placeholder={`<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GA_TRACKING_ID');
            </script>`}
            sx={{ mb: 2 }}
            multiline
            minRows={1} // Adjust to make the text field taller
          />
        </Box>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Current Theme
        </Typography>
        <Box sx={{display: 'flex', cursor: 'pointer', justifyContent: 'space-between', gap: 4}}>
          <Image src='/images/theme_darkgray.jpg' width={200} height={150} alt='Logo'></Image>
          <Image src='/images/theme_default.jpg' width={200} height={150} alt='Logo'></Image>
          <Image src='/images/theme_yellow.jpg' width={200} height={150} alt='Logo'></Image>
        </Box>
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
