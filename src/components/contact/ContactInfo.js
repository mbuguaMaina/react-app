import React from 'react'
import {FaMobileAlt, FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa'
const ContactInfo = () => {
  return (
    <div className='left d-flex  mt-2 pt-2'>
      <div className='d-flex'>
        <span  className='bg-warning icon-user p-2 m-2 rounded  '> <FaMapMarkerAlt className='fs-2 text-black '/> </span>
        <span className='ms-3'> <h3 className="m-0 p-0">Location:</h3> <span>20301-47, Miharati Center</span></span>
      </div>
      <div className='d-flex'>
        <span  className='bg-warning icon-user p-2 m-2 rounded  '> <FaEnvelope className='fs-2 text-black '/> </span>
        <span className='ms-3'> <h3 className="m-0 p-0">Email:</h3> <span>mainamartin732@gmail.com</span></span>
      </div>
      <div className='d-flex'>
        <span  className='bg-warning icon-user p-2 m-2 rounded  '> <FaMobileAlt  className='fs-2 text-black '/> </span>
        <span className='ms-3'> <h3 className="m-0 p-0">Call:</h3> <span>+254714819979</span></span>
      </div>
    
    </div>
  )
}

export default ContactInfo