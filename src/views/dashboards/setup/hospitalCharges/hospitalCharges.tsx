// /* eslint-disable @typescript-eslint/no-unused-vars */

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import React from 'react'

// Style the Box component for the sidebar layout
const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',  // Arrange items vertically
  alignItems: 'flex-start', // Align items to the start
  justifyContent: 'flex-start', // Align items to the start
  gap: '12px', // Space between items
  width: '300px' // Adjust the width of the sidebar
}))

// Style the Link component to remove underline and adjust color
const StyledLink = styled('button')(() => ({
  textDecoration: 'none', // Remove underline
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: '#000', // Set text color to black (you can adjust this to your preferred color)
  fontSize: '16px', // Adjust the font size
  textAlign: 'left', // Align text to the left
  width: '100%',
  '&:hover': {
    color: '#3f51b5', // Change color on hover (optional)
  }
}))

interface HospitalChargesSideBarProps {
  onSelectSetting: (setting: string) => void;
}

const HospitalChargesSideBar: React.FC<HospitalChargesSideBarProps> = ({ onSelectSetting }) => {
  return (
    <Grid container spacing={6}>
      <Grid item>
        <Card>
          <CardContent>
            <OptionsWrapper>
              <StyledLink onClick={() => onSelectSetting('Charges')}>Charges</StyledLink>
              <StyledLink onClick={() => onSelectSetting('ChargesCatagory')}>Charges Category</StyledLink>
              <StyledLink onClick={() => onSelectSetting('ChargesType')}>Charges Type</StyledLink>
              <StyledLink onClick={() => onSelectSetting('TaxCatagory')}>Tax Catagory</StyledLink>
              <StyledLink onClick={() => onSelectSetting('UnitType')}>Unit Type</StyledLink>
              {/* Add more settings links as needed */}
            </OptionsWrapper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HospitalChargesSideBar

