/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'


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
                <Image src='/images/i1.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i2.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i3.jpg' width={200} height={150} alt='Logo'></Image>
                <Image src='/images/i4.jpg' width={200} height={150} alt='Logo'></Image>
            </Box>
            <br/>
            <Button
                component={Link}
                variant='contained'
                href='/Setup/Setting'
            >
                Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default CurrentTheme

