import React from 'react'
import Title from '../Title'
import ContactInfo from './ContactInfo'
import Form from './form/Form'

const Contact = () => {
  return (
    <React.Fragment >
      <Title title='contact us' />
    <div className='container-fluid container-md bg-body mb-5   pb-5 contact-container'>
        <ContactInfo />
        <Form />
    
      </div>
      </React.Fragment>
  )
}

export default Contact