import React from 'react'
import './Category.css'
import { Input } from '../../components/Input'

export const Category = () => {
  return (
    <>
       <h2 className="sidebar-title">Category</h2>

       <div>
        <Input/>
        <Input/>
        <Input/>
       </div>
    </>
  )
}


