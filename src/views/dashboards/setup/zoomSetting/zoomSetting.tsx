/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const ZoomSetting = () => {
 
  return (
    <Grid  container spacing={6}>
      <Grid item xs={12}>
        <Card  sx={{fontSize: '20px'}}>
          <CardContent>
            <CustomTextField fullWidth label='Zoom Api Key' placeholder='D-RU4KuUR6aTDQhgFGUlPA' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Zoom Api Secret' placeholder='CH4pJAQvmUT4PQ1SSWHBFuFuXkPNnnmEQJxJ' sx={{ mb: 2 }}/>
            <Box sx={{mb: 4, mt: 2}}>
            <label htmlFor="Doctor Api Credential">Doctor Api Credential</label>
            <input type="radio" style={{marginLeft: '24px'}}/>Disable
            <input type="radio" style={{marginLeft: '20px'}}/>Enable
            </Box>
            <Box sx={{mb: 4, mt: 2}}>
            <label htmlFor="Use Zoom Client App">Use Zoom Client App</label>
            <input type="radio" style={{marginLeft: '24px'}}/>Disable
            <input type="radio" style={{marginLeft: '20px'}}/>Enable
            </Box>
            <CustomTextField fullWidth label='Default OPD Duration (In Mins)' type='number' sx={{ mb: 2 }}/>
            <CustomTextField fullWidth label='Default IPD Duration (In Mins)' type='number' sx={{ mb: 2 }}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ZoomSetting
