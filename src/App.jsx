


import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'


function App() {
 

  return (
    <div className="container mx-auto lg:px-6 py-5 px-2 ">
     <div className='mb-10'>
     <Navbar></Navbar>
     </div>
     <div className='mb-10'>
     <Outlet></Outlet>
     </div>
      <div>
        <Footer></Footer>
      </div>
      
    </div>
  )
}

export default App
