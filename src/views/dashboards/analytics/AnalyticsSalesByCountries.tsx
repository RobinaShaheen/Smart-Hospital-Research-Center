// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  subtitle: string
}

const data: DataType[] = [
  {
    title: '$11,323.00',
    subtitle: 'OPD income',
    imgSrc: '/images/cards/OPD.png'
  },
  {
    title: '$3,250.00',
    subtitle: 'IPD income',
    imgSrc: '/images/cards/IPD.png'
  },
  {
    title: '$2,131.00',
    subtitle: 'pharmacy income',
    imgSrc: '/images/cards/pharmacy.png'
  },
  {
    title: '$1,636.00',
    subtitle: 'Radiology income',
    imgSrc: '/images/cards/radiology.png'
  },
  {
    title: '$1,400.00',
    subtitle: 'pathology income',
    imgSrc: '/images/cards/pathology.png'
  },
  {
    title: '$1,790.00',
    subtitle: 'Blood bank income_new',
    imgSrc: '/images/cards/blood bank.png'
  },
  {
    title: '$1,521.00',
    subtitle: 'Ambulance income',
    imgSrc: '/images/cards/ambulance.png'
  },
  {
    title: '$1,550.00',
    subtitle: 'General income',
    imgSrc: '/images/cards/general income.png'
  },
  {
    title: '$225,800.00',
    subtitle: 'Expenses',
    imgSrc: '/images/cards/expenses.png'
  }
]

const AnalyticsSalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Incomes'
        subheader=''
        action={
          <OptionsMenu
            options={['Last Week', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                '& img': { mr: 4 },
                alignItems: 'center',
                mb: index !== data.length - 1 ? 4.5 : undefined
              }}
            >
              <img width={34} height={34} src={item.imgSrc} alt={item.subtitle} />

              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    '& svg': { mr: 1 },
                    alignItems: 'center'                  
                  }}
                >
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AnalyticsSalesByCountries
