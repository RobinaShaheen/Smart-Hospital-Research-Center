/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import IssueTable from './IssueTable'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const AddIssueItem = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
         <IssueTable/>
      </Grid>
    </Grid>
  )
}

export default AddIssueItem
