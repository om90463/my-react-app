import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import LatestProduct from '../components/LatestProduct'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <FeaturedProduct />
      <LatestProduct/>
      <Footer/>
    </>
  )
}

export default Home
