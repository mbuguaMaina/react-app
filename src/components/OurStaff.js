 import Data from './StaffData'
import React from 'react'
import { Card } from 'react-bootstrap'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import Title from './Title'

const OurStaff = () => {
  return (
    <>
      <Title title='our staffs' />
    <div className='container-fluid container-md staff-container justify-content-center align-items-center mb-2 pb-2'>
          <Card  className="m-2" >
        <Card.Img className="object-cover" src={Data[0]} atl=""></Card.Img>
        <Card.ImgOverlay className=' overLay d-flex align-items-center  justify-content-center'>
        <div className='d-flex justify-content-center align-items-center w-75'> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaFacebookF className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaTwitter className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaInstagram className='fs-4 text-black '/></div> 
          </div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Martin Maina</Card.Title>
        <Card.Text className='fs-6 fw-small text-black-50'>CEO & FOUNDER ABC</Card.Text>
        </Card.Body>
          </Card>
          <Card  className="m-2" >
        <Card.Img className="object-cover" src={Data[0]} atl=""></Card.Img>
        <Card.ImgOverlay className=' overLay d-flex align-items-center  justify-content-center'>
        <div className='d-flex justify-content-center align-items-center w-75'> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaFacebookF className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaTwitter className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaInstagram className='fs-4 text-black '/></div> 
          </div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Martin Maina</Card.Title>
        <Card.Text className='fs-6 fw-small text-black-50'>CEO & FOUNDER ABC</Card.Text>
        </Card.Body>
          </Card>
          <Card  className="m-2" >
        <Card.Img className="object-cover" src={Data[0]} atl=""></Card.Img>
        <Card.ImgOverlay className=' overLay d-flex align-items-center  justify-content-center'>
        <div className='d-flex justify-content-center align-items-center w-75'> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaFacebookF className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaTwitter className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaInstagram className='fs-4 text-black '/></div> 
          </div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Martin Maina</Card.Title>
        <Card.Text className='fs-6 fw-small text-black-50'>CEO & FOUNDER ABC</Card.Text>
        </Card.Body>
          </Card>
          <Card  className="m-2" >
        <Card.Img className="object-cover" src={Data[0]} atl=""></Card.Img>
        <Card.ImgOverlay className=' overLay d-flex align-items-center  justify-content-center'>
        <div className='d-flex justify-content-center align-items-center w-75'> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaFacebookF className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaTwitter className='fs-4 text-black '/></div> 
       <div className='bg-warning icon-user p-2 m-2 rounded '><FaInstagram className='fs-4 text-black '/></div> 
          </div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Martin Maina</Card.Title>
        <Card.Text className='fs-6 fw-small text-black-50'>CEO & FOUNDER ABC</Card.Text>
        </Card.Body>
          </Card>
          
      </div>
      </>
  )
}

export default OurStaff