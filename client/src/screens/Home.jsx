import React from 'react'
import Layout from '../components/shared/Layout'
import Carousels from '../components/Carousels'
import CarouselElectronics from '../components/CarouselElectronics'

const Home = () => (
  <Layout>
    <div>
      <div className='carousel-divs'>
      <h2>See What's Trending</h2>
      <Carousels />
      </div>
      <div className='carousel-divs'>
      <h2>What's New in Electronics</h2>
      <CarouselElectronics />
      </div>
    </div>

  </Layout>
)

export default Home