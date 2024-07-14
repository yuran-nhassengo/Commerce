import React from 'react'

import '../Sidebar/sideBar.css'
import {Category} from './Category/Category'
import {Price} from './Price/Price'
import {Colors} from './Colors/Colors'

export const SideBar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">

        <div className="logo-container">
          <h1 className='sidebar-title'>Carinha</h1>
        </div>

        <Category handleChange={handleChange}/>

        <Price handleChange={handleChange}/>

        <Colors handleChange={handleChange}/>
        
      </section>
    </>
  )
}


