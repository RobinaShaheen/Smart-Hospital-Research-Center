
/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import { useState } from 'react'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const PharmacyGenerateBill = () => {
  const [searchValue, setSearchValue] = useState('')
  const [total, setTotal] = useState('0')
  const [discount, setDiscount] = useState('0')
  const [tax, setTax] = useState('0')
  const [netAmount, setNetAmount] = useState('0')

  return (

    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" mb={4}>
          <OptionsWrapper>
            <Button variant='contained' color='primary' href='/pharmacy/add-new-patient'>
              New Patient
            </Button>
            <CustomTextField
              fullWidth
              label='Search by Patient Name or ID'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              sx={{ maxWidth: '300px' }}
            />
          </OptionsWrapper>
        </Box>
        <Card>
          <CardContent>
            <CustomTextField
              select
              fullWidth
              label='New Patient'
              defaultValue=''
              sx={{ mb: 4 }}
            >
              <MenuItem value=''>Select</MenuItem>
              {/* Add patient options here */}
            </CustomTextField>
            <CustomTextField fullWidth label='Prescription No' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Bill No' sx={{ mb: 2 }} value='396' disabled />
            <CustomTextField fullWidth label='Case ID' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Date' type='datetime-local' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='2024-08-08T14:08' />
            <CustomTextField
              select
              fullWidth
              label='Medicine Category'
              defaultValue=''
              sx={{ mb: 2 }}
            >
              <MenuItem value=''>Select</MenuItem>
              {/* Add medicine category options here */}
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Medicine Name'
              defaultValue=''
              sx={{ mb: 2 }}
            >
              <MenuItem value=''>Select</MenuItem>
              
              {/* Add medicine name options here */}
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Batch No'
              defaultValue=''
              sx={{ mb: 2 }}
            >
              <MenuItem value=''>Select</MenuItem>
              
              {/* Add batch number options here */}
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Expiry Date'
              defaultValue=''
              sx={{ mb: 2 }}
            >
              <MenuItem value=''>Select</MenuItem>
              
              {/* Add expiry date options here */}
            </CustomTextField>
            <CustomTextField fullWidth label='Quantity' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Available Qty' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Sale Price ($)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Tax (%)' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Amount ($)' sx={{ mb: 2 }} />
            <CustomTextField
              select
              fullWidth
              label='Hospital Doctor'
              defaultValue=''
              sx={{ mb: 2 }}
            >
              <MenuItem value=''>Select</MenuItem>
              
              {/* Add doctor options here */}
            </CustomTextField>
            <CustomTextField fullWidth label='Doctor Name' sx={{ mb: 2 }} />
            <CustomTextField fullWidth label='Note' sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <CustomTextField
                  fullWidth
                  label='Total ($)'
                  value={total}
                  onChange={e => setTotal(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <CustomTextField
                  fullWidth
                  label='Discount ($)'
                  value={discount}
                  onChange={e => setDiscount(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <CustomTextField
                  fullWidth
                  label='Tax ($)'
                  value={tax}
                  onChange={e => setTax(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <CustomTextField
                  fullWidth
                  label='Net Amount ($)'
                  value={netAmount}
                  onChange={e => setNetAmount(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>
            <CustomTextField
              select
              fullWidth
              label='Payment Mode'
              defaultValue='Cash'
              sx={{ mb: 2 }}
            >
              <MenuItem value='Cash'>Cash</MenuItem>
              <MenuItem value='Credit Card'>Credit Card</MenuItem>
              <MenuItem value='Debit Card'>Debit Card</MenuItem>
              <MenuItem value='Online Payment'>Online Payment</MenuItem>
            </CustomTextField>
            <CustomTextField fullWidth label='Payment Amount ($)' sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
              <Button variant='contained' fullWidth sx={{ ml: 2 }}>
                Save & Print
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PharmacyGenerateBill
