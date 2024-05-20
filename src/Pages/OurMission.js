import React from 'react'
import Layout from '../Components/Layout'

function OurMission() {
  return (
    <Layout>
      <div className='bg-light'>
        <div className="container pt-5 ">
          <div className='container mt-5'></div>
          <div className="row">
            <div className="col-md-6">
            
              <h2 className="text-primary mb-4">Our Vision & Mission</h2>
              <p>
                Our vision at Maitrey Public School, Dewalgaow is to provide a comprehensive atmosphere to create a ‘Happy Learner’.
              </p>
              <p>
                We at Maitriy Public School, Dewalgaow, think of education as the means of developing our greatest abilities because in each one of us there is a private hope and dream which when fulfilled can be translated into benefit for everyone and become a great strength for our nation. We are focused on our mission of making quality education with all-round personality development of our students more accessible and affordable so many more students can pursue their dream of excellence. It is a mission we believe will help make the world a better place. We dedicated ourselves at Maitriy Public School to create human capital for our country and endow the world with beautiful minds. We believe that when our students succeed, countries prosper, and societies benefit.
              </p>
              <p>
                “The future is not pre-ordained by machines, it is created by humans.”
              </p>

            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
              <img src="/Assets/school-1.jpeg" alt="Shri Hari Mohan Gupta" className="img-fluid mb-3" style={{ width: '80%', maxHeight: '80vh' }} />
              <p className="text-primary text-center fs-5">
                Shri Prashant Meshram <br />
                Director & Chairman, MPS Dewalgaow
              </p>
            </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default OurMission