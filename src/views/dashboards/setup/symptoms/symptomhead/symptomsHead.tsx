
// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef, GridRowHeightReturnValue } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import { IconButton, Tooltip } from '@mui/material'

// ** Dummy Data
const dummyData = [
  {
    id: 1,
    SymptomHead: 'Thirst',
    SymptomType: 'Eating or Weight Problems',
    SymptomDescription: 'Thirst is the feeling of needing to drink something. It occurs whenever the body is dehydrated for any reason. Any condition that can result in a loss of body water can lead to thirst or excessive thirst.',
    Action: ''
  },
  {
    id: 2,
    SymptomHead: 'Feeling Sad or Down',
    SymptomType: 'Emotional Problem',
    SymptomDescription: 'Personality change in a way that seems different for that person.',
    Action: ''
  },
  {
    id: 3,
    SymptomHead: 'Cramps and injuries',
    SymptomType: 'Muscle and joint Problems',
    SymptomDescription: 'Muscle pain: Muscle spasms, cramps and injuries can all cause muscle pain. Some infections or tumors may also lead to muscle pain. Tendon and ligament pain: Ligaments and tendons are strong bands of tissue that connect your joints and bones. Sprains, strains and overuse injuries can lead to tendon or ligament pain.',
    Action: ''
  },
  {
    id: 4,
    SymptomHead: 'Atopic dermatitis (Eczema)',
    SymptomType: 'Skin Problems',
    SymptomDescription: 'Atopic dermatitis usually develops in early childhood and is more common in people who have a family history of the condition.',
    Action: ''
  },
  {
    id: 5,
    SymptomHead: 'Bladder Leakage',
    SymptomType: 'Bladder Problem',
    SymptomDescription: 'Urinary incontinence — the loss of bladder control — is a common and often embarrassing problem. The severity ranges from occasionally leaking urine when you cough or sneeze to having an urge to urinate that is so sudden and strong you do not get to a toilet in time.',
    Action: ''
  },
  {
    id: 6,
    SymptomHead: 'Constant or severe abdominal pain.',
    SymptomType: 'Stomach Problem',
    SymptomDescription: 'Diseases that affect the digestive system can also cause chronic abdominal pain. The most common are: gastroesophageal reflux disease (GERD) irritable bowel syndrome or spastic colon (a disorder that causes abdominal pain, cramping, and changes in bowel movements)',
    Action: ''
  },
  {
    id: 7,
    SymptomHead: 'Asthma',
    SymptomType: 'Lung Problem',
    SymptomDescription: 'Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath. For some people, asthma is a minor nuisance.',
    Action: ''
  }
]


interface CellType {
  row: typeof dummyData[0]
}


const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'SymptomHead',
    minWidth: 130,
    headerName: 'Symptoms Head',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.SymptomHead}</Typography>
  },
  {
    flex: 0.2,
    field: 'SymptomType',
    minWidth: 130,
    headerName: 'Symptoms Type',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.SymptomType}</Typography>
  },
  {
    flex: 0.2,
    field: 'SymptomDescription',
    minWidth: 130,
    headerName: 'Symptoms Description',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.SymptomDescription}</Typography>
  },
  {
    flex: 0.15,
    field: 'Action',
    minWidth: 120,
    headerName: 'Action',
    renderCell: ({ row }: CellType) =>(
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Tooltip title='Edit'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:pencil'></Icon>
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
                <IconButton size='small' onClick={()=>console.log('Show', row.id)}>
                    <Icon icon='tabler:trash'></Icon>
                </IconButton>
            </Tooltip>
        </Box>
        
    )
  }
]


const SymptomsHead = () => {

  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
  const getRowHeight = (): GridRowHeightReturnValue => 'auto';
  
  return (
    <Card>
      <CardContent>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Symptoms Head List
      </Typography>
      <Button
          component={Link}
          variant='contained'
          href='/Setup/Symptom/addSymptomHead'
          startIcon={<Icon icon='tabler:plus' />}
          sx={{mb: 4}}
        >
          Add Symptoms Head
        </Button>
      <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField
            value={value}
            placeholder='Search Report'
            onChange={e => setValue(e.target.value)}
            sx={{mb: 4}}
          />
        </Box>
        <DataGrid
          autoHeight
          getRowHeight={getRowHeight}
          rows={dummyData}
          columns={columns}
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          pageSizeOptions={[6, 10, 25, 50]}
          onPaginationModelChange={setPaginationModel}
        />
      </CardContent>
    </Card>
  )
}

export default SymptomsHead
