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
  onSelectSetting: (setting: string) => void;
}

const SettingSideBar: React.FC<SettingSideBarProps> = ({ onSelectSetting }) => {

  const [selected, setSelected] = useState<string>('GeneralSetting'); // Track the selected link

  const handleClick = (setting: string) => {
    setSelected(setting); // Update the selected link
    onSelectSetting(setting); // Call the onSelectBloodBank function
  };

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Card>
          <CardContent>
            <OptionsWrapper>
              <StyledLink onClick={() => handleClick('GeneralSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'GeneralSetting' ? 'blue' : '#000', fontSize: '20px'}}>General Setting</StyledLink>
              <StyledLink onClick={() => handleClick('NotificationSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'NotificationSetting' ? 'blue' : '#000', fontSize: '20px'}}>Notification Setting</StyledLink>
              <StyledLink onClick={() => handleClick('SystemNotificationSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'SystemNotificationSetting' ? 'blue' : '#000', fontSize: '20px'}}>System Notification Setting</StyledLink>
              <StyledLink onClick={() => handleClick('SMSSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'SMSSetting' ? 'blue' : '#000', fontSize: '20px'}}>SMS Setting</StyledLink>
              <StyledLink onClick={() => handleClick('EmailSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'EmailSetting' ? 'blue' : '#000', fontSize: '20px'}}>Email Setting</StyledLink>
              <StyledLink onClick={() => handleClick('PaymentMethod')} sx={{"&:focus": {color: 'blue'}, color: selected === 'PaymentMethod' ? 'blue' : '#000', fontSize: '20px'}}>Payment Method</StyledLink>
              <StyledLink onClick={() => handleClick('FrontCMSSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'FrontCMSSetting' ? 'blue' : '#000', fontSize: '20px'}}>Front CMS Setting</StyledLink>
              <StyledLink onClick={() => handleClick('PrefixSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'PrefixSetting' ? 'blue' : '#000', fontSize: '20px'}}>Prefix Setting</StyledLink>
              <StyledLink onClick={() => handleClick('RolePremission')} sx={{"&:focus": {color: 'blue'}, color: selected === 'RolePremission' ? 'blue' : '#000', fontSize: '20px'}}>Role Premission</StyledLink>
              <StyledLink onClick={() => handleClick('BackupRestore')} sx={{"&:focus": {color: 'blue'}, color: selected === 'BackupRestore' ? 'blue' : '#000', fontSize: '20px'}}>Backup Restore</StyledLink>
              <StyledLink onClick={() => handleClick('Languages')} sx={{"&:focus": {color: 'blue'}, color: selected === 'Languages' ? 'blue' : '#000', fontSize: '20px'}}>Languages</StyledLink>
              <StyledLink onClick={() => handleClick('Users')} sx={{"&:focus": {color: 'blue'}, color: selected === 'Users' ? 'blue' : '#000', fontSize: '20px'}}>Users</StyledLink>
              <StyledLink onClick={() => handleClick('CaptchaSetting')} sx={{"&:focus": {color: 'blue'}, color: selected === 'CaptchaSetting' ? 'blue' : '#000', fontSize: '20px'}}>CaptchaSetting</StyledLink>
              <StyledLink onClick={() => handleClick('Modules')} sx={{"&:focus": {color: 'blue'}, color: selected === 'Modules' ? 'blue' : '#000', fontSize: '20px'}}>Modules</StyledLink>
              <StyledLink onClick={() => handleClick('SystemUpdate')} sx={{"&:focus": {color: 'blue'}, color: selected === 'SystemUpdate' ? 'blue' : '#000', fontSize: '20px'}}>System Update</StyledLink>
              {/* Add more settings links as needed */}
            </OptionsWrapper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SettingSideBar

