import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import GeneralSetting from './generalSetting/generalsetting'
import NotificationSetting from './notificationSetting/notificationSetting'
import SystemNotificationSetting from './systemnotification/systemNotification'
import SMSSetting from './smsSetting/smsSetting'
import EmailSetting from './EmailSetting/emailSetting'
import PaymentMethod from './paymentMethod/paymentMethod'
import FrontCMSSetting from './frontsms/frontsmsSetting'
import PrefixSetting from './prefixSetting/prefixSetting'
import RolePremission from './rolesPremission/rolesPremission'
import BackupRestore from './backuprestore/backuprestore'
import Languages from './language/language'
import Users from './user/user'
import CaptchaSetting from './captchSetting/captchaSetting'
import Modules from './modules/modules'
import SystemUpdate from './systemUpdate/systemUpdate'
// import other setting components as needed

const SettingContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'GeneralSetting':
        return <GeneralSetting />;
      case 'NotificationSetting':
        return <NotificationSetting/>;
      case 'SystemNotificationSetting':
        return <SystemNotificationSetting/>;
      case 'SMSSetting':
        return <SMSSetting/>
      case 'EmailSetting':
        return <EmailSetting/>
      case 'PaymentMethod':
        return <PaymentMethod/>
      case 'FrontCMSSetting':
        return <FrontCMSSetting/>
      case 'PrefixSetting':
        return <PrefixSetting/>
      case 'RolePremission':
        return <RolePremission/>
      case 'BackupRestore':
        return <BackupRestore/>
      case 'Languages':
        return <Languages/>
      case 'Users':
        return <Users/>
      case 'CaptchaSetting':
        return <CaptchaSetting/>
      case 'Modules':
        return <Modules/>
      case 'SystemUpdate':
        return <SystemUpdate/>
      // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderSetting()}
      </Grid>
    </Grid>
  )
}

export default SettingContainer
