/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Grid from '@mui/material/Grid'
import IssueTable from './IssueTable'
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
