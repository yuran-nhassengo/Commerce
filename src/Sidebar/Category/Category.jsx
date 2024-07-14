import React from 'react'
import './Category.css'
import { Input } from '../../components/Input'

export const Category = ({handleChange}) => {
  return (
    <div>
       <h2 className="sidebar-title">Category</h2>

       <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type='radio' value="" name='test' />
          <span className='checkmark'></span>All
        </label>

        <Input handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
       </div>
    </div>
  )
}


