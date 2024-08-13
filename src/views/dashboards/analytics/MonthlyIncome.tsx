import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import CloseIcon from '@mui/icons-material/Close';

// Sample data
const data = [
  { name: 'OPD', value: 46, color: '#6A4A3C' },
  { name: 'IPD', value: 30, color: '#FFB238' },
  { name: 'Pharmacy', value: 24, color: '#FFDF5D' },
  { name: 'Pathology', value: 20, color: '#2E8B57' },
  { name: 'Radiology', value: 18, color: '#9370DB' },
  { name: 'Blood Bank', value: 15, color: '#4682B4' },
  { name: 'Ambulance', value: 12, color: '#B0C4DE' },
  { name: 'Income', value: 50, color: '#3CB371' },
];

const MonthlyIncomeOverview: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Monthly Income Overview</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Legend */}
        <Box display="flex" flexWrap="wrap" mt={2} mb={2}>
          {data.map((entry, index) => (
            <Box
              key={`legend-${index}`}
              display="flex"
              alignItems="center"
              mr={2}
              mb={1}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: entry.color,
                  marginRight: 1,
                }}
              />
              <Typography variant="body2">{entry.name}</Typography>
            </Box>
          ))}
        </Box>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={277}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyIncomeOverview;
