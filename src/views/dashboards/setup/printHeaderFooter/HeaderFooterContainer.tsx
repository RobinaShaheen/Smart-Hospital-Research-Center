import React from 'react'
import Grid from '@mui/material/Grid'
import OPDPrescription from './OPDPrescriptionForm'
import OPDBill from './OPDBill'
import IPDPrescription from './IPDPrescription'
import IPDBill from './IPDBill'
import Bill from './Bill'
import PharmacyBill from './PharmacyBill'
import PaySlip from './PaySlip'
import PaymentReceipt from './PaymentReceipt'
import BirthRecord from './BirthRecord'
import DeathRecord from './DeathRecord'
import Pathology from './Pathology'
import Radiology from './Radiology'
import Operation from './Operation'
import BloodBank from './BloodBank'
import Ambulane from './Ambulance'
import DischargeCard from './DischargesCard'

// import other setting components as needed

const HeaderFooterContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'opdPrescrition':
        return <OPDPrescription/>;
      case 'opdBill':
        return <OPDBill/>;
      case 'ipdPrescription':
        return <IPDPrescription/>;
      case 'ipdBill':
        return <IPDBill/>;
      case 'bill':
        return <Bill/>;
      case 'pharmacyBill':
        return <PharmacyBill/>;
      case 'paySlip':
        return <PaySlip/>;
      case 'paymentReceipt':
        return <PaymentReceipt/>;
      case 'birthRecord':
        return <BirthRecord/>
      case 'deathRocord':
        return <DeathRecord/>
      case 'pathology':
        return <Pathology/>
      case 'radiology':
        return <Radiology/>
      case 'operation':
        return <Operation/>
      case 'bloodBank':
        return <BloodBank/>
      case 'ambulance':
        return <Ambulane/>
      case 'dischargeCard':
        return <DischargeCard/>
      
        // Add cases for other settings components
      default:
        return <OPDPrescription/>;
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={10} sx={{ml: 24}}>
        {renderSetting()}
      </Grid>
    </Grid>
  )
}

export default HeaderFooterContainer