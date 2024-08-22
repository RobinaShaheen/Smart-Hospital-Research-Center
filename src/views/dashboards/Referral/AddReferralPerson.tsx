import React, { useState } from 'react'
import { Box, Card, CardContent, Grid, TextField, Button, Typography, MenuItem } from '@mui/material'

const categories = ['OPD', 'IPD', 'Pharmacy', 'Pathology', 'Radiology', 'Blood Bank', 'Ambulance']

const AddReferralPerson = () => {
  const [applyToAll, setApplyToAll] = useState('')

  const handleApplyToAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setApplyToAll(value);
  }

  return (
    
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Add Referral Person
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Referrer Name" required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Referrer Contact" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Contact Person Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Contact Person Phone" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth select label="Category" required>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Standard Commission (%)" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={3} label="Address" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Commission for Modules (%)"
              value={applyToAll}
              onChange={handleApplyToAllChange}
              helperText="Apply to All"
            />
          </Grid>
          {categories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <TextField
                fullWidth
                label={`${category} Commission (%)`}
                value={applyToAll}
                onChange={handleApplyToAllChange}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 3, textAlign: 'right' }}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddReferralPerson
