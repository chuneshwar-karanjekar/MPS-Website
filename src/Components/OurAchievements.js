import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const achievementsData = [
  { title: 'Award 1', description: 'Description for Award 1', image: '/Assets/school-1.jpeg' },
  { title: 'Award 2', description: 'Description for Award 2', image: '/Assets/school-1.jpeg' },
  { title: 'Award 2', description: 'Description for Award 2', image: '/Assets/school-1.jpeg' },
  { title: 'Award 2', description: 'Description for Award 2', image: '/Assets/school-1.jpeg' },
  { title: 'Award 2', description: 'Description for Award 2', image: '/Assets/school-1.jpeg' },

  // Add more achievement data as needed
];

const AchievementCard = ({ title, description, image }) => (
  <div className="achievement-card">
    <img src={image} alt={title} />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  </div>
);

const OurAchievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <>
   <div className='container mt-5 mb-5'>
   <div className="our-achievements ">
      <h1 className='text-primary'>Our Achievements</h1>
      <p>We are honoured to be recognised for our commitment to quality</p>
      <Slider {...settings}>
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </Slider>
    </div>
   </div>
   </>
  );
};

export default OurAchievements;
