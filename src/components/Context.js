import React, { Component } from 'react'
import Data from './Data'
const ProdsContext = React.createContext()
 class ProdsProvider  extends Component {
   state = {
     prods: [],
     filteredProds: [],
     featuredProds: [],
     loading: true,
       type: "all",
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
   }
   
   formatProds = (data) => {
     let products = data.map(prod => {
       let id = prod.sys.id;
       let images =  prod.fields.images.map(image=> image.fields.file.url);
       let formatedProd = { ...prod.fields, id, images }
       return formatedProd;
     })
     return products;
   }
   componentDidMount() {
     let products = this.formatProds(Data)
     let featuredProds = products.filter(prod => prod.featured === true);
      let max_Price = Math.max(...products.map(item => item.price));
     let maxSize = Math.max(...products.map(item => item.size));
     this.setState({
       prods: products,
       filteredProds: products,
       featuredProds, 
       loading: false,
       type: "all",
       maxPrice: max_Price,
   maxSize,
       minPrice: 0,
       capacity: 1,
     })
   }
   handleFilter = event => {
     let target = event.target
     let value = target.type === "checkbox" ? target.checked : target.value
     let type = target.name
 

     this.setState({
       [type]:value
     }, this.filterRooms)
     
   }

   filterRooms = () => {
     let {
       prods,
       type ,
       minSize,
       maxSize,
       capacity ,
       } = this.state
     let tempRooms = [...prods];
     //format capacity
     capacity = parseInt(capacity)
    
   
     //get rooms by type
     if (type !== "all") {
     tempRooms = tempRooms.filter(room => room.type === type);
     }

    //  get room by capacity
     if (capacity !== 1) {
     tempRooms = tempRooms.filter(room => room.capacity >= capacity);
     }
    //  get room by price
     
     tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize)
     this.setState({
       filteredProds : tempRooms
     })
   }
   
   getProd = (slug) => {
     
     let prod = [...this.state.prods]
     let featured = [...this.state.featuredProds];
     let prods = prod.length > 0 ? prod : featured; 
     let products = prods.find(prod => prod.slug === slug)
     return products
   }
  render() {
    return (
      <ProdsContext.Provider value={{...this.state, getProd:this.getProd, handleFilter:this.handleFilter}}>
        {this.props.children}
        
        </ProdsContext.Provider>
    )
  }
}
const ProdsConsumer = ProdsContext.Consumer
 
export { ProdsConsumer,ProdsContext,ProdsProvider}