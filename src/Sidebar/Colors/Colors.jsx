import React from 'react'
import './Colors.css'
import { Input } from '../../components/Input'

export const Colors = ({handleChange}) => {
  return (
    <div>

    <h2 className="sidebar-title color-title">Colors</h2>
     
    <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type='radio' value="" name='test' />
          <span className='checkmark'></span>All
        </label>

        <Input handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color='black'
        />
        <Input handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color='blue'
        />
       </div>
    </div>
  )
}


