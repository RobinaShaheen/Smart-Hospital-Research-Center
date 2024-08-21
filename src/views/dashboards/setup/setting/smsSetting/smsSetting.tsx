"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image';
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import CustomTextField from 'src/@core/components/mui/text-field';
import { Box, MenuItem, Typography } from '@mui/material';

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

const SMSSetting = () => {
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
          SMS Setting
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="sms settings tabs"
            variant="scrollable" // Allow tabs to scroll if they overflow
            scrollButtons="auto" // Show scroll buttons when necessary
          >
            <Tab label="Clickatell SMS Gateway" {...a11yProps(0)} />
            <Tab label="Twilio SMS Gateway" {...a11yProps(1)} />
            <Tab label="MSG91" {...a11yProps(2)} />
            <Tab label="Text Local" {...a11yProps(3)} />
            <Tab label="SMS Country" {...a11yProps(4)} />
            <Tab label="Bulk SMS" {...a11yProps(5)} />
            <Tab label="Mobireach" {...a11yProps(6)} />
            <Tab label="Nexmo" {...a11yProps(7)} />
            <Tab label="Africas Talking" {...a11yProps(8)} />
            <Tab label="Custom SMS Gateway" {...a11yProps(9)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <CustomTextField fullWidth label="Clickatell Username" required />
            <CustomTextField fullWidth label="Clickatell Password " required />
            <CustomTextField fullWidth label="Clickatell API Key" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/clickatell.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <CustomTextField fullWidth label="Twilio Account SID " required />
            <CustomTextField fullWidth label="Authentication Token " required />
            <CustomTextField fullWidth label="Registered Phone Number " required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/twilio.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={2}>
            <CustomTextField fullWidth label="Auth Key " required />
            <CustomTextField fullWidth label="Sender ID" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/msg91.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={3}>
            <CustomTextField fullWidth label="Username " required />
            <CustomTextField fullWidth label="Hash Key" required />
            <CustomTextField fullWidth label="Sender ID" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/textlocal.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={4}>
            <CustomTextField fullWidth label="Username " required />
            <CustomTextField fullWidth label="Sender ID" required />
            <CustomTextField fullWidth label="Password" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/sms-country.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={5}>
            <CustomTextField fullWidth label="Username " required />
            <CustomTextField fullWidth label="Password" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/bulk_sms.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={6}>
            <CustomTextField fullWidth label="Auth Key " required />
            <CustomTextField fullWidth label="Sender ID" required />
            <CustomTextField fullWidth label="Route ID" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/mobireach.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={7}>
            <CustomTextField fullWidth label="Api Key " required />
            <CustomTextField fullWidth label="Nexmo Api Secret" required />
            <CustomTextField fullWidth label="Registered / Form Number" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/nexmo.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={8}>
            <CustomTextField fullWidth label="Username " required />
            <CustomTextField fullWidth label="Api Key" required />
            <CustomTextField fullWidth label="Short Code" required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/africastalking.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={9}>
            <CustomTextField fullWidth label="Gateway Name " required />
            <CustomTextField fullWidth select label="Status">
                <MenuItem value='Disabled'>Disabled</MenuItem>
                <MenuItem value='Enabled'>Enabled</MenuItem>
            </CustomTextField>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/custom-sms.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>
        {/* Render content for other tabs as necessary */}
      </CardContent>
    </Card>
  )
}

export default SMSSetting
