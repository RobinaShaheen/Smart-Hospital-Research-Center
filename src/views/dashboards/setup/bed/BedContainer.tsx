import React from 'react'
import Grid from '@mui/material/Grid'
import BedStatus from './bedStatus/bedStatus'
import BedList from './bed/bedList'
import BedType from './bedType/bedType'
import BedGroup from './bedGroup/bedGroup'
import FloorList from './Floor/floorList'

// import other setting components as needed

const BedContainer = ({ selectedBed }: { selectedBed: string }) => {
  const renderBed = () => {
    switch (selectedBed) {
      case 'BedStatus':
        return <BedStatus/>
      case 'BedList':
        return <BedList/>
      case 'BedType':
        return <BedType/>
      case 'BedGroup':
        return <BedGroup/>
      case 'FloorList':
        return <FloorList/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderBed()}
      </Grid>
    </Grid>
  )
}

export default BedContainer
