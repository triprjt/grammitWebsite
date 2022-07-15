import React from 'react'
import {Navbar, Footer, Header, Possibility} from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg3'>
            <Navbar/>
            <Header/>
        </div>
        <Possibility/>
        <Footer/>
    </div>
  )
}

export default App