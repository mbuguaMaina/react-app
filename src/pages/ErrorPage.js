import React from 'react'
import StyleMainHero from '../components/styledComponents/styleMainHero'
import Banner from '../components/Banner'
import NavBtn from '../components/NavBtn'
import Data from '../components/HeroData'

const ErrorPage = () => {
let image = Data[Math.floor(Data.length * Math.random())]

  return (
    <>
      <StyleMainHero img={image}>
        <Banner desc="404" paragraph="PAGE NOT FOUND"><NavBtn destination='/' >Back Home</NavBtn></Banner>
      </StyleMainHero>
    <div className='d-flex align-items-center justify-content-center display-5 p-5 m-5'  >
      <h1>The page you requested doesn't exist</h1>
      </div>
      </>
  )
}

export default ErrorPage