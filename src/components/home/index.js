
import React from 'react'
import Banner from '../Banner'
import NavBtn from '../NavBtn'
import FeaturedProds from '../FeaturedProds'
 import StyleMainHero from '../styledComponents/styleMainHero'
import Data from '../HeroData'
import OurStaff from '../OurStaff'
import Contact from '../contact/Contact'
import Services from '../Services'
//  import Hero from '../Hero'

let image = Data[Math.floor(Data.length * Math.random())]
const Home = () => {

  
   return (
     <>
       <StyleMainHero img={image}>
         <Banner desc='ComfyLodge & Restaurant' paragraph=' Family  $ Single Fully Serviced Rooms'> 
           <NavBtn destination={'/rooms'}>  Go To Rooms</NavBtn>
       </Banner>
       </StyleMainHero>
       <FeaturedProds />
       <Services />
       <OurStaff />
       <Contact />

     </>
   )
 }
 
 export default Home 