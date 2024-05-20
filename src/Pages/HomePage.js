import React from 'react'
import Layout from '../Components/Layout'
import SliderImg from '../Components/SliderImg';
import OurAchievements from '../Components/OurAchievements';
import CardGallary from '../Components/CardGallary';

const HomePage = () => {
  // Image slider part

  return (
    <Layout>
      <SliderImg />
      <CardGallary />
      {/* <OurMission /> */}
      <OurAchievements/>
    </Layout>

  )
}

export default HomePage;