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

const DateTime = () => {
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
                Date Time
          </Typography>
            <CustomTextField fullWidth label='Date Format *' type='date' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} value='2024-10-08'/>
            <CustomTextField fullWidth label='Time Zone *' type='time' sx={{ mb: 2 }} InputLabelProps={{ shrink: true }}>
                <MenuItem value='(GMT+05:30) Asia, Kalkata'></MenuItem>
            </CustomTextField>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default DateTime

