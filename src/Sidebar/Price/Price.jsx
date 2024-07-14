import React from 'react'
import './Price.css'
import { Input } from '../../components/Input'

export const Price = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type='radio' value="" name='test2' />
          <span className='checkmark'></span>All
        </label>

        <Input handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="test2"
        />
       </div>

  </div>
  )
}


