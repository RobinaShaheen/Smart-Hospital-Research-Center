"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image';
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import CustomTextField from 'src/@core/components/mui/text-field';
import { Box, Typography } from '@mui/material';
import System from './system';
import Patient from './patient';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Modules = () => {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardContent  sx={{mb: 6}}>
        <Typography
          variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
          gutterBottom
          sx={{ mb: 4 }} // Adjust margin bottom if needed
        >
          Modules
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>  
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="sms settings tabs"
            variant="scrollable" // Allow tabs to scroll if they overflow
            scrollButtons="auto" // Show scroll buttons when necessary
          >
            <Tab label="System" {...a11yProps(0)} />
            <Tab label="Patient" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
            <System/>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <Patient/>
        </TabPanel>

        {/* Render content for other tabs as necessary */}
      </CardContent>
    </Card>
  )
}

export default Modules
