// ** MUI Imports
import { Box, Button, FormControl, FormHelperText, Input, MenuItem, Select, Typography, Grid } from '@mui/material'
import { useState } from 'react'

const ImportMedicine = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [medicineCategory, setMedicineCategory] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCsvFile(event.target.files[0])
    }
  }

  const handleImportMedicines = () => {
    if (csvFile) {
      // Logic to import medicines from CSV
      console.log('Importing file:', csvFile)
    } else {
      alert('Please select a CSV file to import.')
    }
  }

  const downloadSampleData = () => {
    // Logic to download sample data file
    const link = document.createElement('a')
    link.href = '/path/to/sample-data.csv' // Update this path to the actual location of your sample file
    link.download = 'sample-data.csv'
    link.click()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant='h5'>
            Medicines
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={downloadSampleData}
          >
            Download Sample Data
          </Button>
        </Box>
        <Typography variant='body2' mb={2}>
          Note: Your CSV data should be in the format below. The first line of your CSV file should be the column headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding problems.
        </Typography>
        <Typography variant='body2' mb={4}>
          <Box component="span" fontWeight="bold">*</Box> Medicine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <Box component="span" fontWeight="bold">*</Box> Company &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <Box component="span" fontWeight="bold">*</Box> Composition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <Box component="span" fontWeight="bold">*</Box> Group &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Unit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min Level &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <Box component="span" fontWeight="bold">*</Box> Re-Order Level &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          VAT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unit/Packing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Note
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <FormControl sx={{ mr: 2, minWidth: 200 }}>
            <Select
              value={medicineCategory}
              onChange={e => setMedicineCategory(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Medicine Category' }}
            >
              <MenuItem value=''><em>Select</em></MenuItem>
              <MenuItem value='Category 1'>Category 1</MenuItem>
              <MenuItem value='Category 2'>Category 2</MenuItem>
              {/* Add more categories as needed */}
            </Select>
            <FormHelperText>Medicine Category *</FormHelperText>
          </FormControl>
          <Input
            type='file'
            inputProps={{ accept: '.csv' }}
            onChange={handleFileChange}
            sx={{ display: 'none' }}
            id='csv-upload'
          />
          <label htmlFor='csv-upload' >
            <Button
              variant='contained'
              color='primary'
              component='span'
            >
              Select CSV File *
            </Button>
          </label>
        </Box>
        <Button
          variant='contained'
          color='primary'
          onClick={handleImportMedicines}
        >
          Import Medicines
        </Button>
      </Grid>
    </Grid>
  )
}

export default ImportMedicine
