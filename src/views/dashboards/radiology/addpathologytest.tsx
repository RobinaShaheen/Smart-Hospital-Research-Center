// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'

// ** Icon Imports

const AddRadiologyTest = () => {
  // ** State
  const [testName, setTestName] = useState('')
  const [shortName, setShortName] = useState('')
  const [testType, setTestType] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [method, setMethod] = useState('')
  const [reportDays, setReportDays] = useState(0)
  const [chargeCategory, setChargeCategory] = useState('')
  const [chargeName, setChargeName] = useState('')
  const [tax, setTax] = useState(0)
  const [standardCharge, setStandardCharge] = useState(0)
  const [amount, setAmount] = useState(0)
  const [testParameterName, setTestParameterName] = useState('')
  const [referenceRange, setReferenceRange] = useState('')
  const [unit, setUnit] = useState('')

  // ** Handler Functions
  const handleAdd = () => {
    // Add logic to handle adding the pathology test
  }

  const handleSave = () => {
    // Add logic to handle saving the pathology test
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add Pathology Test
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Test Name *"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Short Name *"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Test Type</InputLabel>
                <Select
                  value={testType}
                  onChange={(e) => setTestType(e.target.value)}
                >
                  <MenuItem value="Blood">Blood</MenuItem>
                  <MenuItem value="Urine">Urine</MenuItem>
                  <MenuItem value="Biopsy">Biopsy</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category Name *</InputLabel>
                <Select
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                >
                  <MenuItem value="General">General</MenuItem>
                  <MenuItem value="Special">Special</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sub Category"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Method"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Report Days"
                value={reportDays}
                onChange={(e) => setReportDays(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Charge Category *</InputLabel>
                <Select
                  value={chargeCategory}
                  onChange={(e) => setChargeCategory(e.target.value)}
                  required
                >
                  <MenuItem value="Routine">Routine</MenuItem>
                  <MenuItem value="Emergency">Emergency</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Charge Name *</InputLabel>
                <Select
                  value={chargeName}
                  onChange={(e) => setChargeName(e.target.value)}
                  required
                >
                  <MenuItem value="Standard">Standard</MenuItem>
                  <MenuItem value="Premium">Premium</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Tax (%)"
                value={tax}
                onChange={(e) => setTax(Number(e.target.value))}
                InputProps={{ endAdornment: '%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Standard Charge ($) *"
                value={standardCharge}
                onChange={(e) => setStandardCharge(Number(e.target.value))}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Amount ($) *"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Test Parameter Name *"
                value={testParameterName}
                onChange={(e) => setTestParameterName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Reference Range *"
                value={referenceRange}
                onChange={(e) => setReferenceRange(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Unit *"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mr: 2 }}>
            Add
          </Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddRadiologyTest
