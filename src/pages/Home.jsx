import React, { useState } from 'react'


import { Products } from '../Products/Products'
import { Recommended } from '../Recommended/Recommended'
import { Nav } from '../Navigation/Nav'
import { SideBar } from '../Sidebar/sideBar'

//Database
import  products  from '../data/db'

export const Home = () => {

  const [selectedCategory,setSelectedCategory] = useState(null);

  //--------------Input Filter----------------
  const [query,setQuery] = useState("")

  const handleInputChange = event =>{
    setQuery(event.target.value);

  }

  const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  //--------------Input Filter----------------

  return (
    <div>
      <SideBar/>
       <Nav />
      <Recommended/>
      <Products/>
    </div>
  )
}

