import React from 'react';
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

const AddTPA = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Add TPA
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Name' required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Code' required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Contact No' required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Address' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Contact Person Name' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Contact Person Phone' />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, textAlign: 'right' }}>
          <Button variant='contained'>Save</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddTPA;
