import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Futures from './components/Futures'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Banner from './components/Banner'
import ServicesComponent from './components/ServicesComponent'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-[#151320] to-[#120E23] overflow-x-hidden min-h-screen'>
      <Navbar/>
      <Header/>
      <Futures/>
      <ProductList/>
      <Banner/>
      <ServicesComponent/>
      <Footer/>
     </div>
  )
}

export default App