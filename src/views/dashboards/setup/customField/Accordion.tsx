// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system'

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)<AccordionProps>(({ theme }) => ({
  margin: 0,
  borderRadius: 0,
  boxShadow: 'none !important',
  border:
    theme.palette.mode === 'light' ? `1px solid ${theme.palette.grey[300]}` : `1px solid ${theme.palette.divider}`,
  '&:not(:last-of-type), &:last-child .MuiAccordionSummary-root:not(.Mui-expanded)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    }
  },
  '&:last-of-type': {
    '& .MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(0, 4),
  minHeight: theme.spacing(10),
  transition: 'min-height 0.15s ease-in-out',
  backgroundColor: theme.palette.action[theme.palette.mode === 'light' ? 'hover' : 'selected'],
  borderBottom:
    theme.palette.mode === 'light' ? `1px solid ${theme.palette.grey[300]}` : `1px solid ${theme.palette.divider}`,
  '&.Mui-expanded': {
    minHeight: theme.spacing(10)
  },
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    '&.Mui-expanded': {
      margin: '11px 0'
    }
  },
  '& .MuiTypography-root': {
    fontWeight: 400
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.secondary
  }
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: `${theme.spacing(4)} !important`
}))

const AccordionCustomized = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const expandIcon = (value: string) => <Icon icon={expanded === value ? 'tabler:minus' : 'tabler:plus'} />

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:user' /> */}
          <Typography sx={{ ml: 2 }}>Ambulance Call</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CustomTextField fullWidth> 
            </CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:briefcase' /> */}
          <Typography sx={{ ml: 2 }}>Appointment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>Birthday Record</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          id='customized-panel-header-4'
          expandIcon={expandIcon('panel4')}
          aria-controls='customized-panel-content-4'
        >
          <Typography sx={{ ml: 2 }}>Blood Issue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          id='customized-panel-header-5'
          expandIcon={expandIcon('panel5')}
          aria-controls='customized-panel-content-5'
        >
          <Typography sx={{ ml: 2 }}>Component Issue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          id='customized-panel-header-6'
          expandIcon={expandIcon('panel6')}
          aria-controls='customized-panel-content-6'
        >
          <Typography sx={{ ml: 2 }}>Death Record</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          id='customized-panel-header-7'
          expandIcon={expandIcon('panel7')}
          aria-controls='customized-panel-content-7'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>Donor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          id='customized-panel-header-8'
          expandIcon={expandIcon('panel8')}
          aria-controls='customized-panel-content-8'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>Expences</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          id='customized-panel-header-9'
          expandIcon={expandIcon('panel9')}
          aria-controls='customized-panel-content-9'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>Income</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          id='customized-panel-header-10'
          expandIcon={expandIcon('panel10')}
          aria-controls='customized-panel-content-10'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>IPD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          id='customized-panel-header-11'
          expandIcon={expandIcon('panel11')}
          aria-controls='customized-panel-content-11'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>Consultant Register</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-12'
          expandIcon={expandIcon('panel12')}
          aria-controls='customized-panel-content-12'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Typography sx={{ ml: 2 }}>IPD Nurse Note</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField fullWidth></CustomTextField>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionCustomized