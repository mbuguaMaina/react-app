import React, { Component } from 'react'
import { ProdsContext } from './Context'
 import Loading from '../components/Loading'
import Title from './Title'
// import {Carousel } from 'react-bootstrap'
import Prod from './Prod'
import Prod2 from './Prod2'
 
export default class FeaturedProds extends Component {
 static contextType = ProdsContext;
  render() {
    const { loading, featuredProds } = this.context
  
    let prods = featuredProds.map(prod => {
  return <Prod prods={prod} key={prod.id} />
})
    let screen = window.innerWidth;
    return (
      <>
        <Title title='featured rooms'/>
          <div className='  bg-body prod-container container    '>
          {loading ? <Loading /> : screen < 768 ? <Prod2 prods={featuredProds} />: prods}         
           </div>
        </>
     )
   }
 }
 