// ** MUI Imports
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Grid, Button, Box } from '@mui/material'
import { useState } from 'react'

// ** Demo Data
const dummyData = [
  { id: 1, name: 'Aspirin', company: 'Company A', composition: 'Acetylsalicylic Acid', category: 'Painkiller', group: 'Analgesic', unit: 'Tablet', availableQty: 100 },
  { id: 2, name: 'Paracetamol', company: 'Company B', composition: 'Paracetamol', category: 'Antipyretic', group: 'Analgesic', unit: 'Tablet', availableQty: 150 },
  { id: 3, name: 'Amoxicillin', company: 'Company C', composition: 'Amoxicillin', category: 'Antibiotic', group: 'Penicillin', unit: 'Capsule', availableQty: 200 },
]

const MedicineTable = () => {
  const [selectedMedicines, setSelectedMedicines] = useState<number[]>([])

  const handleCheckboxChange = (id: number) => {
    setSelectedMedicines(prevState =>
      prevState.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]
    )
  }

  const handleDeleteSelected = () => {
    // Logic to delete selected medicines
    console.log('Delete selected medicines:', selectedMedicines)
    setSelectedMedicines([])
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Box>
            <Button variant='contained' color='primary' sx={{ mr: 2 }} href='/pharmacy/import-medicines'>
              Import Medicine
            </Button>
            <Button variant='contained' color='primary' sx={{ mr: 2 }} href='/pharmacy/add-medicines'>
              Add Medicine 
            </Button>
            <Button variant='contained' color='primary' sx={{ mr: 2 }} href='/pharmacy/purchase'>
              Purchase
            </Button>
          </Box>
          <Button 
            variant='contained' 
            color='secondary' 
            onClick={handleDeleteSelected}
            disabled={selectedMedicines.length === 0}
          >
            Delete Selected
          </Button>
        </Box>
        <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
          Medicine Inventory
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Medicine Name</TableCell>
                <TableCell>Medicine Company</TableCell>
                <TableCell>Medicine Composition</TableCell>
                <TableCell>Medicine Category</TableCell>
                <TableCell>Medicine Group</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Available Qty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((medicine, index) => (
                <TableRow key={medicine.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedMedicines.includes(medicine.id)}
                      onChange={() => handleCheckboxChange(medicine.id)}
                    />
                    {index + 1}
                  </TableCell>
                  <TableCell>{medicine.name}</TableCell>
                  <TableCell>{medicine.company}</TableCell>
                  <TableCell>{medicine.composition}</TableCell>
                  <TableCell>{medicine.category}</TableCell>
                  <TableCell>{medicine.group}</TableCell>
                  <TableCell>{medicine.unit}</TableCell>
                  <TableCell>{medicine.availableQty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default MedicineTable
