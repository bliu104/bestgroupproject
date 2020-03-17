import React from 'react'
import Layout from '../components/shared/Layout'
import Carousels from '../components/Carousels'
import CarouselElectronics from '../components/CarouselElectronics'

const Home = () => (
  <Layout>
    <div>
      <h4>See what's trending</h4>
      <Carousels />
      <br/>
      <h4>What's new in electronics</h4>
      <CarouselElectronics />
    </div>

  </Layout>
)

export default Home