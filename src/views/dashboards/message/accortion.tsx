
// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { IconButton} from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary 
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:user' /> */}
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Typography sx={{ ml: 2 ,color:'#6495ED'}}>Doctor's Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Morbidity and mortality (M&M) conferences are traditional, recurring conferences held by medical services
             at academic medical centers, most large private medical and surgical practices, and other medical 
             centers.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:briefcase' /> */}
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Independent Day Celebration</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Independence Day 2023 theme for this year will be "Nation First, Always First". will be held within the 
            framework of events belonging to "Azadi ka Amrit Mohatsav".
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          {/* <Icon fontSize='1.25rem' icon='tabler:gift' /> */}
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Free Dental Check Up & Awarness Camp</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails><Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear Team,
              A Campaign Will Be Conduct By Our Hospital For All Kind Of Disease For Those Patient Who Are Not Able To 
            Pay Higher Fees. Please Attend And Co-Operate With Us.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          id='customized-panel-header-4'
          expandIcon={expandIcon('panel4')}
          aria-controls='customized-panel-content-4'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Doctor's Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear Doctor's, I hope this email finds you well. I'm writing to invite you to a meeting on [10/01/2024] at 
            [12pm] to discuss [Patient Health Discussion]. The meeting will take place at/on Meeting Hall .
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          id='customized-panel-header-5'
          expandIcon={expandIcon('panel5')}
          aria-controls='customized-panel-content-5'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Staff's Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%', fontWeight:'bold'}}>
            Hello All, A seminar will conduct by department for all our staff to update yourself about new medical schemes and technology.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          id='customized-panel-header-6'
          expandIcon={expandIcon('panel6')}
          aria-controls='customized-panel-content-6'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Nurses Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            A meeting every week increases the chance of catching practice management problems at an early stage. The meetings should include everyone involved in major processes, from the clerical to clinical.


            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          id='customized-panel-header-7'
          expandIcon={expandIcon('panel7')}
          aria-controls='customized-panel-content-7'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Republic Day Celebration</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            India marks and celebrates the date on which the Constitution of India came into effect on 26 January 1950.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          id='customized-panel-header-8'
          expandIcon={expandIcon('panel8')}
          aria-controls='customized-panel-content-8'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Staff Health Monitoring</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear All Staff,In these conferences, the team--comprised of nursing, dietary, social work, physical and occupational therapy, speech therapy, respiratory therapy, et al---reviews the progress of each patient and makes adjustments as needed to the plan of care. They will also address insurance approval issues, if applicable.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          id='customized-panel-header-9'
          expandIcon={expandIcon('panel9')}
          aria-controls='customized-panel-content-9'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Workshop on Systematic Review and Meta-Analysis</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            The faculty for this workshop will be speakers with national and international research exposure, having experience in the field of Systematic Reviews and Meta-analysis
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          id='customized-panel-header-10'
          expandIcon={expandIcon('panel10')}
          aria-controls='customized-panel-content-10'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Doctor Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Morbidity and mortality (M&M) conferences are traditional, recurring conferences held by medical services at academic medical centers, most large private medical and surgical practices, and other medical centers.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          id='customized-panel-header-11'
          expandIcon={expandIcon('panel11')}
          aria-controls='customized-panel-content-11'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Nursing Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            A meeting every week increases the chance of catching practice management problems at an early stage. The meetings should include everyone involved in major processes, from the clerical to clinical.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-12'
          expandIcon={expandIcon('panel12')}
          aria-controls='customized-panel-content-12'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Medical Camp</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear Team,
          A Campaign Will Be Conduct By Our Hospital For All Kind Of Disease For Those Patient Who Are Not Able To Pay Higher Fees. Please Attend And Co-Operate With Us.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-13'
          expandIcon={expandIcon('panel13')}
          aria-controls='customized-panel-content-13'
        >
         <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Typography sx={{ ml: 2,color:'#6495ED' }}>Staff Health Monitoring</Typography>
          <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
         </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear All Staff,
            In these conferences, the team--comprised of nursing, dietary, social work, physical and occupational therapy, speech therapy, respiratory therapy, et al---reviews the progress of each patient and makes adjustments as needed to the plan of care. They will also address insurance approval issues, if applicable.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-14'
          expandIcon={expandIcon('panel14')}
          aria-controls='customized-panel-content-14'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Eye Check-Up Camp</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            The objective of this camp was to spread awareness on eye disorders, early detection of ailments, and to detect refractive errors and provide corrective glasses free of cost to the underprivileged communities.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-15'
          expandIcon={expandIcon('panel15')}
          aria-controls='customized-panel-content-15'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Doctors Meeting</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Morbidity and mortality (M&M) conferences are traditional, recurring conferences held by medical services at academic medical centers, most large private medical and surgical practices, and other medical centers.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-16'
          expandIcon={expandIcon('panel16')}
          aria-controls='customized-panel-content-16'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>BLood Donation Camp for (World Blood Donor Day)</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            The event serves to raise awareness of the need for safe blood and blood products and to thank voluntary, unpaid blood donors for their life-saving gifts of blood.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-17'
          expandIcon={expandIcon('panel17')}
          aria-controls='customized-panel-content-17'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Blood Pressure Treatment Campaign</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            The two classes of medication are both recommended as "first-line" treatments for high blood pressure: angioplasty-converting enzyme (ACE) inhibitors and angioplasty receptor blockers (ARBs).
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel12')}>
        <AccordionSummary
          id='customized-panel-header-18'
          expandIcon={expandIcon('panel18')}
          aria-controls='customized-panel-content-18'
        >
          <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ ml: 2,color:'#6495ED' }}>Staff Health Monitoring</Typography>
            <Box>
            <IconButton size='small'>
              <Icon icon='tabler:trash'></Icon>
            </IconButton>
            <IconButton size='small'>
              <Icon icon='tabler:edit'></Icon>
            </IconButton>
            </Box>
          </Box>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <p style={{width:'60%'}}>
            Dear All Staff,
              In these conferences, the team--comprised of nursing, dietary, social work, physical and occupational therapy, speech therapy, respiratory therapy, et al---reviews the progress of each patient and makes adjustments as needed to the plan of care. They will also address insurance approval issues, if applicable.
            </p>
              <Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Publish Date : 08/15/2023 
                </Box>
                <Box>
                <Icon icon='tabler:calendar'></Icon>Notice Date : 08/11/2023
                </Box>
                <Box>
                  <h3 style={{color:'skyblue'}}>Message To</h3 >
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user' style={{color:'skyblue'}}></Icon>Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Accountant</p>
                  <p style={{borderBottom:'1px solid gray'}}> <Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Doctor</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pharmacist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Pathologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Radiologist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Super Admin</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Receptionist</p>
                  <p style={{borderBottom:'1px solid gray'}}><Icon icon='tabler:user'style={{color:'skyblue'}}></Icon>Nurse</p>
                </Box>

              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionCustomized