/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import SEODetail from './seo'
import Link from 'next/link'
const AddCMSPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Title *' sx={{ mb: 4 }}/>
            <Box>
                <Typography 
                variant='h6' // You can adjust the variant as needed (e.g., 'h3', 'h2')
                gutterBottom
                >
                Page Type    
                </Typography>
                <input type="radio" />Standard
                <input type="radio" />Event
                <input type="radio" />Notice
                <input type="radio" />Gallery
            </Box>
            <CustomTextField fullWidth label='Description' sx={{ mb: 2, mt: 4 }}/>
            <Button
                component={Link}
                variant='contained'
                href='/front-cms/addmedia'
                startIcon={<Icon icon='tabler:plus' />}
            >
                Add Media
            </Button>
            <SEODetail/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddCMSPage
