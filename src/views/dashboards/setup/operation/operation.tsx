
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import React, { useState } from 'react'

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

interface SettingSideBarProps {
  onSelectOperation: (setting: string) => void;
}

const OperationSideBar: React.FC<SettingSideBarProps> = ({ onSelectOperation }) => {

  const [selected, setSelected] = useState<string>('OperationCategory'); // Track the selected link

  const handleClick = (setting: string) => {
    setSelected(setting); // Update the selected link
    onSelectOperation(setting); // Call the onSelectBloodBank function
  };

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Card>
          <CardContent>
            <OptionsWrapper>
              <StyledLink onClick={() => handleClick('OperationCategory')} sx={{"&:focus": {color: 'blue'}, color: selected === 'OperationCategory' ? 'blue' : '#000', fontSize: '16px'}}>Operation Category</StyledLink>
              <StyledLink onClick={() => handleClick('OperationList')} sx={{"&:focus": {color: 'blue'}, color: selected === 'OperationList' ? 'blue' : '#000', fontSize: '16px'}}>Operation</StyledLink>
              {/* Add more settings links as needed */}
            </OptionsWrapper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default OperationSideBar

