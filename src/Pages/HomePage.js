import React from 'react'
import Layout from '../Components/Layout'
import SliderImg from '../Components/SliderImg';
import OurAchievements from '../Components/OurAchievements';
import CardGallary from '../Components/CardGallary';
import OurMission from './OurMission';

const HomePage = () => {
  // Image slider part
  const images = [
    '/Assets/school-1.jpeg',
    '/Assets/school-2.jpeg',
    '/Assets/school-3.jpeg',
    // Add more image URLs as needed
  ];

  return (
    <Layout>
      <SliderImg images={images} />
      <CardGallary />
      <OurMission />
      <OurAchievements/>
    </Layout>

  )
}

export default HomePage;