import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const notifications = [
  "Demo resets every 4 hours. Feel free to test all the features before purchasing, keep in mind that some features are disabled. As there are many users checking demo simultaneously, so if you found any inconsistency then please try demo after sometime or report us at https://support.qdocs.net.",
  "Children’s eye health and safety program",
  "Staff Notice",
  "Doctors Meeting",
  "Eye Check-up Camp",
  "Staff Health Monitoring",
  "Medical Camp",
  "Workshop on Systematic Review and Meta-analysis",
  "Nurses Meeting",
]

const NotificationBar = () => {
  const [visibleNotifications, setVisibleNotifications] = useState(notifications)

  const handleDismiss = (index: number) => {
    setVisibleNotifications(visibleNotifications.filter((_, i) => i !== index))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#FFFFFF', // White background
        padding: 1,
        gap: 1
      }}
    >
      {visibleNotifications.map((notification, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F9F9F9', // Table row background color
            border: '1px solid #E0E0E0', // Table row border color
            borderRadius: 1,
            padding: 1,
            width: '100%',
          }}
        >
          <Typography variant='body2' sx={{ flex: 1 }}>
            {notification}
          </Typography>
          <IconButton onClick={() => handleDismiss(index)} size='small'>
            <CloseIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  )
}

export default NotificationBar
