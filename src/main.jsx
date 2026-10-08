import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route ,Routes} from  'react-router-dom'
import Dashboard from '../components/Dashboard'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
     
    <Route path='/' element={<Dashboard/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Route>

  ))


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
