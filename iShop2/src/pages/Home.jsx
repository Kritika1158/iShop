import React from 'react'
import Categories from '../components/Categories'
import Cover from '../components/Cover'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import PaymentIcon from '../components/PaymentIcons'
import Product from '../components/Product1'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
    <Slider/>
    <Categories/>
    <Products/>
    <Cover/>
    <Featured/>
    <Newsletter/>
    <Footer/>
    <PaymentIcon/>
    </div>
  )
}

export default Home