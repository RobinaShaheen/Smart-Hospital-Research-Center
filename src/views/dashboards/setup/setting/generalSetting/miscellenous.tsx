/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const Miscellaneous = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
          <Typography
                variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                sx={{ mb: 4 }} // Adjust margin bottom if needed
            >
                Miscellaneous
          </Typography>
            <label htmlFor="Doctor Restriction Mode">Doctor Restriction Mode</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled <br/>
            <label htmlFor="SuperAdmin Visibility">SuperAdmin Visibility</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled <br/>
            <label htmlFor="Patient Panel">Patient Panel</label>
            <input type="radio" />Disabled
            <input type="radio" />Enabled
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Miscellaneous

