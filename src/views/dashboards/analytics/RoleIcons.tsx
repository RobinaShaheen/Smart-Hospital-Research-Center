import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';
import Link from 'next/link';

const RolesList: React.FC = () => {
  const roles = [
    { role: 'Admin', count: 1, path: '/human-resource' },
    { role: 'Accountant', count: 1, path: '/human-resource'  },
    { role: 'Doctor', count: 4, path: '/human-resource'  },
    { role: 'Pharmacist', count: 1, path: '/human-resource'  },
    { role: 'Pathologist', count: 1, path: '/human-resource'  },
    { role: 'Radiologist', count: 1, path: '/human-resource'  },
    { role: 'Super Admin', count: 1, path: '/human-resource'  },
    { role: 'Receptionist', count: 1, path: '/human-resource'  },
    { role: 'Nurse', count: 2, path: '/human-resource'  },
  ];

  return (
    <Box mt={4}>
      {roles.map((roleData, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: 16}} 
          sx={{'&:hover': {boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}}
          >
          <Link href={roleData.path} style={{textDecoration: 'none'}}>
          <CardContent>
            <Grid container alignItems="center" spacing={2} sx={{cursor: 'pointer'}}>
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
          </Link>
        </Card>
      ))}
    </Box>
  );
};

export default RolesList;
