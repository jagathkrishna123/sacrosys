import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Futures from './components/Futures'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-[#151320] to-[#120E23] overflow-x-hidden'>
      <Navbar/>
      <Header/>
     
      <Futures/>

     </div>
  )
}

export default App