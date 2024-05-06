import React from 'react';

const CardGallary = () => (
   <>

   {/* Key Highlights line start */}
   <div className="container mt-5 mb-5 key-highlight">
      <h1 className=" key-highlight text-center mb-5 text-primary">Key Highlights of Our School</h1>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/Assets/school-1.jpeg" className="card-img-top" alt="Highlight 1" />
            <div className="card-body">
              <h5 className="card-title">Highlight 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/Assets/school-1.jpeg" className="card-img-top" alt="Highlight 2" />
            <div className="card-body">
              <h5 className="card-title">Highlight 2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/Assets/school-3.jpeg" className="card-img-top" alt="Highlight 3" />
            <div className="card-body">
              <h5 className="card-title">Highlight 3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/Assets/school-3.jpeg" className="card-img-top" alt="Highlight 3" />
            <div className="card-body">
              <h5 className="card-title">Highlight 3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/* Key Highlights line End */}

   <div className="quote-container">
  <div className="quote-text">
   <h1 className='text-primary'> Let us remember </h1> <br />
    <span className="blue">One book</span>, <span className="green">one pen</span>, <span className="red">one child</span>, <br />
    and <span className="orange">one teacher</span> can change the world.
  </div>
</div>


{/* School Statistics Start */}
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5 text-primary">School Statistics</h1>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card text-center bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Years Of Experience</h5>
              <p className="card-text">96</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text">60+</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Total Stafs</h5>
              <p className="card-text">15+</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Bus</h5>
              <p className="card-text">5+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* School Statistics End */}

   </>

);
export default CardGallary;