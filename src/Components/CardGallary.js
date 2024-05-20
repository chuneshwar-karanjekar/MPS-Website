import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';


const CardGallary = () => (
  <>
 <div className="main-section bg-lightgrey">
      <div className="container mt-5">
        <div className="row">
          <div className="main-image col-md-6">
            <Fade top>
              <h1 className="heading-text"> Welcome To </h1>
            </Fade>
            <span className="heading-border"></span>
            <Fade bottom delay={500}>
              <h1 className="heading-text p-2">Maitrey Public School  </h1>
            </Fade>
          </div>
          <div className="col-md-6 mt-3">
            <Fade right>
              <div className="about-campus">
                <p>Education is the promise of progress, in every society, in every family. All men by nature desire to know and only the educated are free. At Maitrey Public School, we intend to develop a passion for learning. We are committed to impart quality education which builds character plus intelligence.
                  <br/>
                Set amidst the lush green acreage and equipped with the state-of-the-art educational and sport facilities, the school provides an environment conducive to the holistic development of students.  The excellent academic results and the achievements of the students in sports and cultural arena has garnered a name amongst the highest echelons in the city and the State.

                </p>
              </div>
            </Fade>
            <Zoom delay={1000}>
              <NavLink to="https://forms.gle/jgN2T8C7xiV1TA5w9" className="btn btn-success ">Admission Open 2024-25</NavLink>
            </Zoom>
          </div>
        </div>
      </div>
    </div>

    {/* Key Highlights line start */}
    <div className="container mt-5 mb-5 key-highlight ">
      <Fade bottom>
        <h1 className="key-highlight text-center mb-5 text-primary">Key Highlights of Our School</h1>
      </Fade>
      <div className="row">
        <div className="col-md-3 mb-4">
          <Fade right  delay={900}>
            <div className="card">
              <img src="/Assets/computer-lab.jpg" className="card-img-top" alt="Highlight 1" />
              <div className="card-body">
                <h5 className="card-title">Innovation Lab</h5>
                <p className="card-text">Our State of Art Innovation Lab enables students to get hands-on education on the latest technologies like Robotics and 3D Printing. These labs are spaces where Students can be creative, collaborate and think outside of the traditional boxes</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-3 mb-4">
          <Fade right  delay={800}>
            <div className="card">
              <img src="/Assets/tradittion.jpg" className="card-img-top" alt="Highlight 2" />
              <div className="card-body">
                <h5 className="card-title">Proud Tradition</h5>
                <p className="card-text">Podar Education Network carries a legacy of trust and commitment to quality education since 1927. The Father of our Nation, Mahatma Gandhiji was the first President of the Anandilal Podar Trust and his vision and values still drive the organization.</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-3 mb-4">
          <Fade right  delay={700}>
            <div className="card">
              <img src="/Assets/sport.png" className="card-img-top" alt="Highlight 3" />
              <div className="card-body">
                <h5 className="card-title"> Non-academic Excellence</h5>
                <p className="card-text">Our school consistently achieves top academic results, providing students with a well-rounded education that prepares them for success in higher education and beyond. Our students also excel in various sports.</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-3 mb-4">
          <Fade right  delay={600}>
            <div className="card">
              <img src="/Assets/charecter.jpeg" className="card-img-top" alt="Highlight 3" />
              <div className="card-body">
                <h5 className="card-title">Character Development</h5>
                <p className="card-text">We prioritize character education, instilling values of respect, responsibility, and resilience to help students become not only successful scholars but also compassionate and ethical citizens.</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
    {/* Key Highlights line End */}


    <div className="quote-container">
      <div className="quote-text">
      <Zoom>
        <h1 className='text-primary'> Let us remember </h1> <br />
        </Zoom>
        <span className="blue">One book</span>, <span className="green">one pen</span>, <span className="red">one child</span>, <br />
        and <span className="orange">one teacher</span> can change the world.
      </div>
    </div>
    

    {/* School Statistics Start */}
    <div className="container mt-5 mb-5">
      <Zoom>
      <h1 className="text-center mb-5 text-primary">School Statistics</h1>
      </Zoom>
      
      <div className="row">
        <div className="col-md-3 mb-4">
        <Zoom  delay={800}> 
          <div className="card text-center bg-primary text-white">
           
            <div className="card-body">
              <h5 className="card-title">Years Of Experience</h5>
              <p className="card-text">8+</p>
            </div>
           
          </div>
          </Zoom>
        </div>
        <div className="col-md-3 mb-4">
        <Zoom  delay={800}> 
          <div className="card text-center bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text">350+</p>
            </div>
          </div>
          </Zoom>
        </div>
        <div className="col-md-3 mb-4">
        <Zoom  delay={800}> 
          <div className="card text-center bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Total Staffs</h5>
              <p className="card-text">16+</p>
            </div>
          </div>
          </Zoom>
        </div>
        <div className="col-md-3 mb-4">
        <Zoom  delay={800}> 
          <div className="card text-center bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Bus</h5>
              <p className="card-text">6+</p>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>
    {/* School Statistics End */}

  </>

);
export default CardGallary;