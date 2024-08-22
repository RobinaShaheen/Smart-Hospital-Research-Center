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

const PaymentMethod = () => {
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
          Payment Method
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>  
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="sms settings tabs"
            variant="scrollable" // Allow tabs to scroll if they overflow
            scrollButtons="auto" // Show scroll buttons when necessary
          >
            <Tab label="Paypal" {...a11yProps(0)} />
            <Tab label="Strip" {...a11yProps(1)} />
            <Tab label="PayU" {...a11yProps(2)} />
            <Tab label="CCAvenue" {...a11yProps(3)} />
            <Tab label="InstaMojo" {...a11yProps(4)} />
            <Tab label="Paystack" {...a11yProps(5)} />
            <Tab label="Razorpay" {...a11yProps(6)} />
            <Tab label="Paytm" {...a11yProps(7)} />
            <Tab label="Midtrans" {...a11yProps(8)} />
            <Tab label="Pesapal" {...a11yProps(9)} />
            <Tab label="Flutter Wave" {...a11yProps(10)} />
            <Tab label="iPay Africa" {...a11yProps(11)} />
            <Tab label="JazzCash" {...a11yProps(12)} />
            <Tab label="Billplz" {...a11yProps(13)} />
            <Tab label="SSLCommerz" {...a11yProps(14)} />
            <Tab label="Walkingm" {...a11yProps(15)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
            <CustomTextField fullWidth label="Paypal Username" required />
            <CustomTextField fullWidth label="Paypal Password " required />
            <CustomTextField fullWidth label="Paypal Signature" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/paypal.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <CustomTextField fullWidth label="Stripe API Secret Key" placeholder='sk_test_YLQh86Az2IdcuqfQQOx47yam' required />
            <CustomTextField fullWidth label="Stripe Publicshable Key " placeholder='pk_test_nYHEZ1mJ8FpaoXV4KVxQs7qR' required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/stripe.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={2}>
            <CustomTextField fullWidth label="PayU Money Key" required />
            <CustomTextField fullWidth label="PayU Money Salt" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/paym.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={3}>
            <CustomTextField fullWidth label="Merchant Id " required />
            <CustomTextField fullWidth label="Working Key" required />
            <CustomTextField fullWidth label="Access Code" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/ccavenue.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={4}>
            <CustomTextField fullWidth label="Private API Key " required />
            <CustomTextField fullWidth label="Private Auth Token" required />
            <CustomTextField fullWidth label="Private Salt" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/instamojo.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={5}>
            <CustomTextField fullWidth label="Paystack Secret Key" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/paystack.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={6}>
            <CustomTextField fullWidth label="Razorpay Key Id" required />
            <CustomTextField fullWidth label="Razorpay Key Secret" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/razorpay.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={7}>
            <CustomTextField fullWidth label="Merchant Id" required />
            <CustomTextField fullWidth label="Merchant Key" required />
            <CustomTextField fullWidth label="Website" required />
            <CustomTextField fullWidth label="Industry Type" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/paytm.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={8}>
            <CustomTextField fullWidth label="Server Key" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/midtrans.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={9}>
            <CustomTextField fullWidth label="Consumer Key" required />
            <CustomTextField fullWidth label="Consumer Secret" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/pesapal.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={10}>
            <CustomTextField fullWidth label="Public Key" required />
            <CustomTextField fullWidth label="Secret Key" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/flutterwave.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={11}>
            <CustomTextField fullWidth label="Vendor ID" required />
            <CustomTextField fullWidth label="HashKey" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/ipayafrica.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={12}>
            <CustomTextField fullWidth label="Merchant ID" required />
            <CustomTextField fullWidth label="Password (auto generated)" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/jazzcash.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={13}>
            <CustomTextField fullWidth label="Api Key" required />
            <CustomTextField fullWidth label="Customer Service Email" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/billplz.jpg' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={14}>
            <CustomTextField fullWidth label="Store ID" required />
            <CustomTextField fullWidth label="Store Password" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/sslcommerz.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>

        <TabPanel value={value} index={15}>
            <CustomTextField fullWidth label="Client ID" required />
            <CustomTextField fullWidth label="Client Secret" required/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                <Image src='/images/walkingm.png' width={150} height={150} alt='' />
            </Box>
            <Button variant="contained" color="primary">Save</Button>
        </TabPanel>
        {/* Render content for other tabs as necessary */}
      </CardContent>
    </Card>
  )
}

export default PaymentMethod
