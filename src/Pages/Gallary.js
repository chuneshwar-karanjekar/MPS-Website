import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../Components/Layout'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Gallary = () => {
  const staffData = [
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Madhvi_mam.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Anchal_Meshram.jpg' },
    { name: 'Anita Thakre', position: 'Assistant Teacher', image: '/Assets/Staffs/Anita_Thakre.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Chhaya_Harinkhede.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Deepa_Chandrikapure.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Deepa_Pandav.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Dharmendra_Bhatere.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Madhuri_Tembhare.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Omprakash_Nagpure.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/pourmina_d_patil.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Sangeeta_Barai.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Shubhash_Neware.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Surendra_Naik.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Tumeshwari_Yede.jpg' },
    { name: 'John Doe', position: 'Manager', image: '/Assets/Staffs/Yograj_Sonteke.jpg' },
    { name: 'Jane Smith', position: 'Developer', image: '/Assets/Staffs/Vandana_Bohane.jpg' },
    // Add more staff members as needed
  ];
 
  const photos = [
    { src: '/Assets/Activity/photo-1.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-2.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-3.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-4.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-5.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-6.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-7.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-8.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-9.jpg', alt: 'Student 1' },
    { src: '/Assets/Activity/photo-10.jpg', alt: 'Student 1' },

  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
<Layout>
    <section className='staff-gallery '>
      <div className='container mt-5 '>
      <div className="staff-gallery-title title_purple_30px text-primary text-center pb-1 "></div>
        <div className="staff-gallery-title title_purple_30px text-primary text-center pb-1 mt-5"><h1>Our Staff Gallery</h1></div>
        <div className="staff-gallery-counter-title text-center pb-2"><h5>Meet our amazing team</h5></div>

        <Slide {...settings} >
          {staffData.map((staff, index) => (
            <div key={index} className='staff-gallery-card align-items-center text-center'>
              <div className='staff-image'>
                <img src={staff.image} alt={staff.name} loading='lazy' />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>


    <div className='polaroid-gallery'>
      <div className='container'>
        <div className='gallery-title text-primary text-center pb-1'>
          <h1>Our Student's Gallery</h1>
        </div>
        <div className='gallery-subtitle text-center pb-5'>
          We are honoured to showcase our students
        </div>
        <div className='polaroid-cardsBox d-flex flex-wrap justify-content-center'>
          {photos.map((photo, index) => (
            <div key={index} className='polaroid-card'>
              <div className='polaroid-image'>
                <img src={photo.src} alt={photo.alt} loading='lazy' />
              </div>
              {/* <div className='polaroid-caption'>
                {photo.alt}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>

    </Layout>
  );
};

export default Gallary;
