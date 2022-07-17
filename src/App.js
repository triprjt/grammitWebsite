import React from 'react'
import {Navbar, Footer, Header, Possibility} from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className=''>
      <div className='h-screen gradient__bg3'>
        <Navbar/>
        <Header/>
      </div>
      <div className='h-screen min-h-full'>
        <Possibility/>
      </div>
      <div className='h-screen min-h-full'>
        <Footer/>
      </div>
    </div>
  ) 
}

export default App