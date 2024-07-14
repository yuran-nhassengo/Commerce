import React from 'react'


import { Products } from '../Products/Products'
import { Recommended } from '../Recommended/Recommended'

export const Home = () => {
  return (
    <div>
      <Products/>
      <Recommended/>
    </div>
  )
}

