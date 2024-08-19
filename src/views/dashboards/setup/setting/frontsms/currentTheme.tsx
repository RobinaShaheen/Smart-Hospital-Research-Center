/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const CurrentTheme = () => {
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
             Current Theme
            </Typography>
            <Box sx={{display: 'flex', cursor: 'pointer', justifyContent: 'space-between', gap: 4}}>
                <Image src='/images/theme_darkgray.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/theme_default.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/theme_yellow.jpg' width={200} height={150} alt='Logo'></Image>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default CurrentTheme

