
import './App.css'

import {Nav} from '../src/Navigation/Nav'
import {Products} from '../src/Products/Products'
import {Recommended} from '../src/Recommended/Recommended'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes'

function App() {


  return (
    <>
      <Nav />
     <RouterProvider router={route}/>
    </>
  )
}

export default App
