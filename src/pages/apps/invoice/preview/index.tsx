// ** Demo Components Imports
import Preview from 'src/views/apps/invoice/preview/Preview'

const InvoicePreview = () => {
  return <Preview id='4987' />
}

InvoicePreview.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default InvoicePreview
