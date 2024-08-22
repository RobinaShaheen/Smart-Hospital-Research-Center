// ** React Imports
'use client'
import { useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import { MenuItem } from '@mui/material'

const AddPurchase = () => {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [tax, setTax] = useState(0)
  const [netAmount, setNetAmount] = useState(0)
  const [purchaseDate, setPurchaseDate] = useState('')
  const [note, setNote] = useState('')
  const [paymentAmount, setPaymentAmount] = useState(0)

  const handleCalculate = () => {
    const calculatedNetAmount = total - (total * discount / 100) + tax
    setNetAmount(calculatedNetAmount)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Add Purchase
        </Typography>
        <Box display='flex' flexDirection='column' gap={4}>
          <Box display='flex' gap={4}>
            <CustomTextField
              select
              fullWidth
              label='Select Supplier'
              defaultValue=''
              sx={{ flex: 1 }}
            >
              <MenuItem value=''>Select</MenuItem>
              {/* Add supplier options here */}
            </CustomTextField>
            <CustomTextField
              fullWidth
              label='Bill No'
              defaultValue=''
              sx={{ flex: 1 }}
            />
          </Box>

          <CustomTextField
            fullWidth
            label='Purchase Date'
            type='datetime-local'
            InputLabelProps={{ shrink: true }}
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />

          <Box display='flex' flexDirection='column' gap={2}>
            <Typography variant='body1' fontWeight={600}>Medicine Details</Typography>
            <Box display='flex' gap={4}>
              <CustomTextField
                select
                fullWidth
                label='Medicine Category *'
                defaultValue=''
              >
                <MenuItem value=''>Select</MenuItem>
                {/* Add medicine category options here */}
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                label='Medicine Name *'
                defaultValue=''
              >
                <MenuItem value=''>Select</MenuItem>
                {/* Add medicine name options here */}
              </CustomTextField>
            </Box>
            <Box display='flex' gap={4}>
              <CustomTextField
                fullWidth
                label='Batch No *'
              />
              <CustomTextField
                fullWidth
                label='Expiry Date *'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box display='flex' gap={4}>
              <CustomTextField
                fullWidth
                label='MRP ($) *'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Batch Amount ($)'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Sale Price ($) *'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Packing Qty'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Quantity *'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Purchase Price ($) *'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
              <CustomTextField
                fullWidth
                label='Tax (%)'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
                onChange={(e) => {
                  setTax(Number(e.target.value))
                  handleCalculate()
                }}
              />
              <CustomTextField
                fullWidth
                label='Amount ($) *'
                type='number'
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Box>
          </Box>

          <Box display='flex' flexDirection='column' gap={2} mt={4}>
            <Typography variant='body1' fontWeight={600}>Summary</Typography>
            <Box display='flex' flexDirection='column' gap={2}>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='body1'>Total ($)</Typography>
                <CustomTextField
                  type='number'
                  value={total}
                  onChange={(e) => {
                    setTotal(Number(e.target.value))
                    handleCalculate()
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='body1'>Discount ($)</Typography>
                <CustomTextField
                  type='number'
                  value={discount}
                  onChange={(e) => {
                    setDiscount(Number(e.target.value))
                    handleCalculate()
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='body1'>Tax ($)</Typography>
                <CustomTextField
                  type='number'
                  value={tax}
                  onChange={(e) => {
                    setTax(Number(e.target.value))
                    handleCalculate()
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='body1'>Net Amount ($)</Typography>
                <CustomTextField
                  type='number'
                  value={netAmount}
                  InputProps={{ inputProps: { min: 0 } }}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column' gap={2} mt={4}>
            <CustomTextField
              fullWidth
              label='Note'
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <CustomTextField
              fullWidth
              type='file'
              label='Attach Document'
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Box display='flex' flexDirection='column' gap={2} mt={4}>
            <CustomTextField
              select
              fullWidth
              label='Payment Mode'
              defaultValue='Cash'
            >
              <MenuItem value='Cash'>Cash</MenuItem>
              <MenuItem value='Card'>Card</MenuItem>
              <MenuItem value='Online'>Online</MenuItem>
            </CustomTextField>
            <CustomTextField
              fullWidth
              label='Payment Amount ($)'
              type='number'
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(Number(e.target.value))}
              InputProps={{ inputProps: { min: 0 } }}
            />
            <CustomTextField
              fullWidth
              label='Payment Note'
            />
          </Box>

          <Button variant='contained' color='primary' sx={{ mt: 4 }}>
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddPurchase
