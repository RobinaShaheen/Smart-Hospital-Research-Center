import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CloseIcon from '@mui/icons-material/Close';

// Sample data
const data = [
  { name: 'Jan', Income: 4000, Expenses: 24000 },
  { name: 'Feb', Income: 3000, Expenses: 22100 },
  { name: 'Mar', Income: 5000, Expenses: 22900 },
  { name: 'Apr', Income: 4780, Expenses: 20000 },
  { name: 'May', Income: 5890, Expenses: 21810 },
  { name: 'Jun', Income: 32983.4, Expenses: 250670 },
  { name: 'Jul', Income: 3490, Expenses: 21000 },
  { name: 'Aug', Income: 3000, Expenses: 19000 },
  { name: 'Sep', Income: 3000, Expenses: 0 },
  { name: 'Oct', Income: 3000, Expenses: 0 },
  { name: 'Nov', Income: 3000, Expenses: 0 },
  { name: 'Dec', Income: 3000, Expenses: 0 },
];

const YearlyIncomeExpense: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Yearly Income & Expense</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Legend */}
        <Box display="flex" flexWrap="wrap" mt={2} mb={2}>
          <Box display="flex" alignItems="center" mr={2} mb={1}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: '#3CB371',
                marginRight: 1,
              }}
            />
            <Typography variant="body2">Income</Typography>
          </Box>
          <Box display="flex" alignItems="center" mr={2} mb={1}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: '#FF69B4',
                marginRight: 1,
              }}
            />
            <Typography variant="body2">Expenses</Typography>
          </Box>
        </Box>

        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Income" stroke="#3CB371" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Expenses" stroke="#FF69B4" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default YearlyIncomeExpense;
