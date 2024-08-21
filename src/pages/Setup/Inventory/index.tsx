import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import InventorySideBar from 'src/views/dashboards/setup/inventory/inventory'
import InventoryContainer from 'src/views/dashboards/setup/inventory/inventoryContanier'
const Appointment = () => {
  const [selectedInventory, setSelectedInventory] = useState<string>('ItemCategory')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <InventorySideBar onSelectInventory={setSelectedInventory} />
        </Grid>
        <Grid item xs={9}>
          <InventoryContainer selectedInventory={selectedInventory} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
