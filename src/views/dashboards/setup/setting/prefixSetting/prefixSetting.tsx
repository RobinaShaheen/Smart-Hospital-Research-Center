"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from 'src/@core/components/mui/text-field';
import { Box, Typography } from '@mui/material';

const PrefixSetting = () => {

  return (
    <Card>
      <CardContent  sx={{mb: 6}}>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Prefix Setting
        </Typography>
        <Box sx={{width: '60%', ml: 40}}>
          <CustomTextField fullWidth label='IPD No' placeholder='IPDN' sx={{ mb: 2, mt: 4 }}/>
          <CustomTextField fullWidth label='OPD No' placeholder='OPDN' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='IPD Prescription' placeholder='IPDP' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='OPD Prescription' placeholder='OPDP' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Appointment' placeholder='APPNO' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Pharmacy Bill' placeholder='PHARMAB' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Operation Reference No' placeholder='OTREF' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Blood Bank Bill' placeholder='BIB' sx={{ mb: 2, mt: 4 }}/>
          <CustomTextField fullWidth label='Ambulance Call Bill' placeholder='ACB' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Radiology Bill' placeholder='RADIOB' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Pathology Bill' placeholder='PATHOB' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='OPD Checkup Id' placeholder='CHKID' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Pharmacy Purchase No' placeholder='PCHNO' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Transection Id' placeholder='TRANID' sx={{ mb: 2 }}/>
          <CustomTextField fullWidth label='Birth Record Reference No' placeholder='BREF' sx={{ mb: 2, mt: 4 }}/>
          <CustomTextField fullWidth label='Death Record Reference No' placeholder='DREF' sx={{ mb: 2 }}/>
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

export default PrefixSetting
