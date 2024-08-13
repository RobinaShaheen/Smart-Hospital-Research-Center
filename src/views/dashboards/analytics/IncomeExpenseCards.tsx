import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { MoneyOff, LocalHospital, LocalPharmacy, MedicalServices, LocalLibrary, MedicalInformation, DirectionsCar, InsertChart } from '@mui/icons-material'

const incomeExpenseData = [
  { title: 'OPD Income', amount: '$11,700.00', icon: <MedicalServices /> },
  { title: 'IPD Income', amount: '$3,250.00', icon: <LocalHospital /> },
  { title: 'Pharmacy Income', amount: '$2,626.40', icon: <LocalPharmacy /> },
  { title: 'Pathology Income', amount: '$1,400.00', icon: <MedicalInformation /> },
  { title: 'Radiology Income', amount: '$1,636.00', icon: <InsertChart /> },
  { title: 'Blood Bank Income', amount: '$1,790.80', icon: <LocalLibrary /> },
  { title: 'Ambulance Income', amount: '$1,521.00', icon: <DirectionsCar /> },
  { title: 'General Income', amount: '$1,550.00', icon: <MoneyOff /> },
  { title: 'Expenses', amount: '$225,800.00', icon: <MoneyOff /> }
]

const IncomeExpenseCards = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 2,
        padding: 2
      }}
    >
      {incomeExpenseData.map((item, index) => (
        <Card key={index} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
          <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: '#F5F5F5', borderRadius: '50%' }}>
              {item.icon}
            </Box>
            <Box>
              <Typography variant='body1'>{item.title}</Typography>
              <Typography variant='h6'>{item.amount}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default IncomeExpenseCards
