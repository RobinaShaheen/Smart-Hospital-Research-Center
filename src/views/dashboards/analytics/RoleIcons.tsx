import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const RolesList: React.FC = () => {
  const roles = [
    { role: 'Admin', count: 1 },
    { role: 'Accountant', count: 1 },
    { role: 'Doctor', count: 4 },
    { role: 'Pharmacist', count: 1 },
    { role: 'Pathologist', count: 1 },
    { role: 'Radiologist', count: 1 },
    { role: 'Super Admin', count: 1 },
    { role: 'Receptionist', count: 1 },
    { role: 'Nurse', count: 2 },
  ];

  return (
    <Box mt={4}>
      {roles.map((roleData, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: 16 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Box
                  style={{
                    backgroundColor: '#ffa726',
                    borderRadius: '50%',
                    padding: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PersonIcon style={{ color: '#fff', fontSize: 40 }} />
                </Box>
              </Grid>
              <Grid item xs>
                <Typography variant="h6">{roleData.role}</Typography>
                <Typography variant="h4">{roleData.count}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default RolesList;
