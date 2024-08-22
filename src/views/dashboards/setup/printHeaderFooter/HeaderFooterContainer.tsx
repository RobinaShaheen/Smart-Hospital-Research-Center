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
        return <div><OPDPrescription/></div>;
      case 'opdBill':
        return <div><OPDBill/></div>;
      case 'ipdPrescription':
        return <div><IPDPrescription/></div>;
      case 'ipdBill':
        return <div><IPDBill/></div>;
      case 'bill':
        return <div><Bill/></div>;
      case 'pharmacyBill':
        return <div><PharmacyBill/></div>;
      case 'paySlip':
        return <div><PaySlip/></div>;
      case 'paymentReceipt':
        return <div><PaymentReceipt/></div>;
      case 'birthRecord':
        return <div><BirthRecord/></div>
      case 'deathRocord':
        return <div><DeathRecord/></div>
      case 'pathology':
        return <div><Pathology/></div>
      case 'radiology':
        return <div><Radiology/></div>
      case 'operation':
        return <div><Operation/></div>
      case 'bloodBank':
        return <div><BloodBank/></div>
      case 'ambulance':
        return <div><Ambulane/></div>
      case 'dischargeCard':
        return <div><DischargeCard/></div>
      
        // Add cases for other settings components
      default:
        return <div><OPDPrescription/></div>;
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