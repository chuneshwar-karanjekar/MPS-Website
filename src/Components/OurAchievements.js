import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurAchievements = () => {


  return (
    <>

<section className='achievements'>
      <div className='container'>
        <div className="achievements-title title_purple_30px text-primary text-center pb-1"><h1>Our Achievements</h1></div>
        <div className="achievements-counter-title fs-25 text-center pb-5">We are honoured to be recognised for our commitment to quality</div>

        <div className='achievements-cardsBox d-flex flex-wrap justify-content-center'>
          <div className='achievements-card align-items-center text-center'>
            <div className='achievement-image'>
              <img src='/Assets/Awards/award-1.jpg' alt='Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily' loading='lazy' />
              <div className='achievements-card-body text-start text-center'>
                <p className='achievements-card-text'>Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily</p>
              </div>
            </div>
          </div>
          <div className='achievements-card align-items-center text-center'>
            <div className='achievement-image'>
              <img src='/Assets/Awards/award-2.jpg' alt='Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily' loading='lazy' />
              <div className='achievements-card-body text-start text-center'>
                <p className='achievements-card-text'>Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily</p>
              </div>
            </div>
          </div>
          <div className='achievements-card align-items-center text-center'>
            <div className='achievement-image'>
              <img src='/Assets/Awards/award-3.jpg' alt='Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily' loading='lazy' />
              <div className='achievements-card-body text-start text-center'>
                <p className='achievements-card-text'>Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily</p>
              </div>
            </div>
          </div>
          <div className='achievements-card align-items-center text-center'>
            <div className='achievement-image'>
              <img src='/Assets/Awards/award-1.jpg' alt='Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily' loading='lazy' />
              <div className='achievements-card-body text-start text-center'>
                <p className='achievements-card-text'>Maitrey Public School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily</p>
              </div>
            </div>
          </div>
          {/* Add more similar cards here */}
        </div>
      </div>
    </section>

    </>
  );
};

export default OurAchievements;
