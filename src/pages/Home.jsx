import React, { useState } from 'react'


import { Products } from '../Products/Products'
import { Recommended } from '../Recommended/Recommended'
import { Nav } from '../Navigation/Nav'
import { SideBar } from '../Sidebar/sideBar'

//Database
import  products  from '../db/data'
import { Card } from '../components/Card'

export const Home = () => {

  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery] = useState("")


  //--------------Input Filter----------------
  

  const handleInputChange = event =>{
    setQuery(event.target.value);

  }

  const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  //--------------Radio Filter----------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

//--------------Buttons Filter----------------

  const handleClick = event =>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){

    let filteredProducts = products
    
    //Filtering Input Items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter

    if(selected){
      filteredProducts =filteredProducts.filter(
        ({category,color,company,newPrice,title} ) => 
          category === selected ||
         color === selected || 
         company === selected || 
         newPrice === selected ||
         title === selected )
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>(
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      review={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      
      
      />
    ))

 

  }

  const result =    filteredData(products,selectedCategory,query);

  return (
    <div>
      <SideBar/>
       <Nav />
      <Recommended/>
      <Products/>
    </div>
  )
}

