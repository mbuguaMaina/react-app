import React  from 'react'
import { Link } from 'react-router-dom'

const Btns = () => {
   

  return (
    <div className='d-flex col-12 col-md-12 justify-content-between m-auto align-items-center'>
     
        <Link to='/home' className='text-decoration-none btn btn-outline-primary'>  Ask Service </Link>
    
      
     
        <Link to='/home' className='text-decoration-none btn btn-outline-info'> Looking to Hire </Link>
    
     
    
    
    </div>
  )
}

export default Btns