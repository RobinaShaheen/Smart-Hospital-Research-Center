import { useState, SyntheticEvent, Fragment } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Icon from 'src/@core/components/icon'
import { useAuth } from 'src/hooks/useAuth'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  fullName: string;
  profilePicture: string | null
  avatar?: string | null
  role: string;
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  '&:hover .MuiBox-root, &:hover .MuiBox-root svg': {
    color: theme.palette.primary.main
  }
}))

const UserDropdown = (props: Props) => {
  const { settings } = props
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const router = useRouter()
  const { user, logout } = useAuth()

  const { direction } = settings

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  const styles = {
    px: 4,
    py: 1.75,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      mr: 2.5,
      fontSize: '1.5rem',
      color: 'text.secondary'
    }
  }

  if (!user) {
    // Return null or a placeholder if user is not authenticated
    return null
  }

  const renderMenuItems = () => {
    switch (user.role) {
      case 'admin':
        return (
          <>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
              <Box sx={styles}>
              <Icon icon='tabler:user-check' />
              My Profile
            </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
            <Box sx={styles}>
              <Icon icon='tabler:settings' />
              Settings
            </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
            <Box sx={styles}>
              <Icon icon='tabler:credit-card' />
              Billing
            </Box>
          </MenuItemStyled>
          <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
            <Box sx={styles}>
              <Icon icon='tabler:lifebuoy' />
              Help
              </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
            <Box sx={styles}>
              <Icon icon='tabler:info-circle' />
              FAQ
            </Box>
            </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
            <Box sx={styles}>
              <Icon icon='tabler:currency-dollar' />
              Pricing
            </Box>
          </MenuItemStyled>
        </>
      )
      case 'SuperAdmin':
        return (
          <>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
              <Box sx={styles}>
              <Icon icon='tabler:user-check' />
              My Profile
            </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
            <Box sx={styles}>
              <Icon icon='tabler:settings' />
              Settings
            </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
            <Box sx={styles}>
              <Icon icon='tabler:credit-card' />
              Billing
            </Box>
          </MenuItemStyled>
          <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
            <Box sx={styles}>
              <Icon icon='tabler:lifebuoy' />
              Help
              </Box>
          </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
            <Box sx={styles}>
              <Icon icon='tabler:info-circle' />
              FAQ
            </Box>
            </MenuItemStyled>
          <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
            <Box sx={styles}>
              <Icon icon='tabler:currency-dollar' />
              Pricing
            </Box>
          </MenuItemStyled>
        </>
        )
        case 'Doctor':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Pharmacist':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Pathologist':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Radiologist':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Accountant':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Receptionist':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        )
        case 'Nurse':
          return (
            <>
              <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
                <Box sx={styles}>
                <Icon icon='tabler:user-check' />
                My Profile
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
              <Box sx={styles}>
                <Icon icon='tabler:settings' />
                Settings
              </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
              <Box sx={styles}>
                <Icon icon='tabler:credit-card' />
                Billing
              </Box>
            </MenuItemStyled>
            <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
              <Box sx={styles}>
                <Icon icon='tabler:lifebuoy' />
                Help
                </Box>
            </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
              <Box sx={styles}>
                <Icon icon='tabler:info-circle' />
                FAQ
              </Box>
              </MenuItemStyled>
            <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
              <Box sx={styles}>
                <Icon icon='tabler:currency-dollar' />
                Pricing
              </Box>
            </MenuItemStyled>
          </>
        ) 
      default:
        return null
    }
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt={user.fullName ?? 'User'} // Fallback to 'User' if user.username is null/undefined
          src={user.profilePicture ?? '/path/to/default/avatar.png'} // Provide a default avatar
          onClick={handleDropdownOpen}
          sx={{ width: 38, height: 38 }}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4.75 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <Box sx={{ py: 1.75, px: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar alt={user.fullName ?? 'User'} src={user.profilePicture ?? '/path/to/default/avatar.png'} sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>
            <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500 }}>{user.fullName}</Typography>
              <Typography variant='body2'>{user.role}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
        {renderMenuItems()}
        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
        <MenuItemStyled sx={{ p: 0 }} onClick={handleLogout}>
          <Box sx={styles}>
            <Icon icon='tabler:logout' />
            Sign Out
          </Box>
        </MenuItemStyled>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown


