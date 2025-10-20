import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Futures from './components/Futures'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-[#151320] to-[#120E23] overflow-x-hidden'>
      <Navbar/>
      <Header/>
      <Futures/>
      <ProductList/>
      <Banner/>
      <Footer/>
     </div>
  )
}

export default App