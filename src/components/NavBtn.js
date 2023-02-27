import React  from 'react'
import { Link } from 'react-router-dom'

const NavBtn = ({destination, children}) => {
   

  return (
    <div className=' d-flex flex-fill p-3 w-75'>
     
      <Link to={destination} className='text-decoration-none btn-outline-warning bg-transparent form-control text-white fs-5 p-2 text-center'>   { children}</Link>
    </div>
  )
}

export default NavBtn