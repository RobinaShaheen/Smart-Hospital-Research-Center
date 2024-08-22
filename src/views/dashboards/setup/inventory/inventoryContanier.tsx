import React from 'react'
import Grid from '@mui/material/Grid'
import ItemCategory from './itemCategory/itemCategory'
import ItemStore from './itemStore/itemStore'
import ItemSupplier from './ItemSupplier/itemSupplier'

// import other setting components as needed

const InventoryContainer = ({ selectedInventory }: { selectedInventory: string }) => {
  const renderInventory = () => {
    switch (selectedInventory) {
      case 'ItemCategory':
        return <ItemCategory/>
      case 'ItemStore':
        return <ItemStore/>
      case 'ItemSupplier':
        return <ItemSupplier/>
      
        // Add cases for other settings components
      default:
        return <div>Please select a setting from the sidebar.</div>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ml: 10}}>
        {renderInventory()}
      </Grid>
    </Grid>
  )
}

export default InventoryContainer
