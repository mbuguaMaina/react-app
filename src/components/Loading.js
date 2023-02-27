import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'> <Spinner animation='border' color='blue' size={196} /> </div>
  )
}

export default Loading