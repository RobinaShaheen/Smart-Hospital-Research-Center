// /* eslint-disable @typescript-eslint/no-unused-vars */

// // ** MUI Imports
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import { styled } from '@mui/material/styles'
// import Box, { BoxProps } from '@mui/material/Box'
// import CardContent from '@mui/material/CardContent'
// import GeneralSetting from './generalsetting'
// import Link from 'next/link'

// // Style the Box component for the sidebar layout
// const OptionsWrapper = styled(Box)<BoxProps>(() => ({
//   display: 'flex',
//   flexDirection: 'column',  // Arrange items vertically
//   alignItems: 'flex-start', // Align items to the start
//   justifyContent: 'flex-start', // Align items to the start
//   gap: '12px', // Space between items
//   width: '300px' // Adjust the width of the sidebar
// }))

// // Style the Link component to remove underline and adjust color
// const StyledLink = styled(Link)(() => ({
//   textDecoration: 'none', // Remove underline
//   color: '#000', // Set text color to black (you can adjust this to your preferred color)
//   fontSize: '16px', // Adjust the font size
//   '&:hover': {
//     color: '#3f51b5', // Change color on hover (optional)
//   }
// }))

// const SettingSideBar = () => {
//   return (
//     <Grid container spacing={6}>
//       <Grid sx={{mt: 6, ml:6}}>
//         <Card>
//           <CardContent>
//             <OptionsWrapper>
//               <StyledLink href={'/Setup/Setting/generalsetting'}>General Setting</StyledLink>
//               <StyledLink href={''}>Notification Setting</StyledLink>
//               <StyledLink href={''}>System Notification Setting</StyledLink>
//               <StyledLink href={''}>SMS Setting</StyledLink>
//               <StyledLink href={''}>Email Setting</StyledLink>
//               <StyledLink href={''}>Payment Methods</StyledLink>
//               <StyledLink href={''}>Front CMS Setting</StyledLink>
//               <StyledLink href={''}>Prefix Setting</StyledLink>
//               <StyledLink href={''}>Roles Permissions</StyledLink>
//               <StyledLink href={''}>Backup / Restore</StyledLink>
//               <StyledLink href={''}>Languages</StyledLink>
//               <StyledLink href={''}>Users</StyledLink>
//               <StyledLink href={''}>Captcha Settings</StyledLink>
//               <StyledLink href={''}>Modules</StyledLink>
//               <StyledLink href={''}>System Update</StyledLink>
//             </OptionsWrapper>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default SettingSideBar

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

interface SettingSideBarProps {
  onSelectSetting: (setting: string) => void;
}

const SettingSideBar: React.FC<SettingSideBarProps> = ({ onSelectSetting }) => {
  return (
    <Grid container spacing={6}>
      <Grid item>
        <Card>
          <CardContent>
            <OptionsWrapper>
              <StyledLink onClick={() => onSelectSetting('GeneralSetting')}>General Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('NotificationSetting')}>Notification Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('SystemNotificationSetting')}>System Notification Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('SMSSetting')}>SMS Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('EmailSetting')}>Email Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('PaymentMethod')}>Payment Method</StyledLink>
              <StyledLink onClick={() => onSelectSetting('FrontCMSSetting')}>Front CMS Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('PrefixSetting')}>Prefix Setting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('RolePremission')}>Role Premission</StyledLink>
              <StyledLink onClick={() => onSelectSetting('BackupRestore')}>Backup Restore</StyledLink>
              <StyledLink onClick={() => onSelectSetting('Languages')}>Languages</StyledLink>
              <StyledLink onClick={() => onSelectSetting('Users')}>Users</StyledLink>
              <StyledLink onClick={() => onSelectSetting('CaptchaSetting')}>CaptchaSetting</StyledLink>
              <StyledLink onClick={() => onSelectSetting('Modules')}>Modules</StyledLink>
              <StyledLink onClick={() => onSelectSetting('SystemUpdate')}>System Update</StyledLink>
              {/* Add more settings links as needed */}
            </OptionsWrapper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SettingSideBar

