import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <div className='bg-success text-white'>
        {/* <marquee width="90%" direction="left" height="30px">
          <h5 className='mt-1'>This is a sample scrolling text that scrolls texts to the left</h5>
        </marquee> */}
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <NavLink className="navbar-brand font-weight-bold" to="/">MAITREY PUBLIC SCHOOL</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="aboutDropdown" role="button">
                  About Us
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li><NavLink className="dropdown-item" to="/OurMission">Our Vision & Mission</NavLink></li>
                  {/* <li><NavLink className="dropdown-item" to="/PrincipleMsg">Principal's Message</NavLink></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="academicsDropdown" role="button">
                  Academics
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                  <li><NavLink className="dropdown-item" to="#">Academic Calendar 2024</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Syllabus</NavLink></li>
                  {/* <li><NavLink className="dropdown-item" to="#">Uniform</NavLink></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Gallery">Gallery</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="resultsDropdown" role="button">
                  Results
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="resultsDropdown">
                  <li className="dropdown-submenu">
                    <NavLink className="dropdown-item dropdown-toggle" to="#" id="finalResultDropdown" role="button">
                      Main/Final Result 2024
                    </NavLink>
                    <ul className="dropdown-menu dropdown-submenu-left" aria-labelledby="finalResultDropdown">
                      <li><NavLink className="dropdown-item" to="/Assets/Result/LKG.pdf" target="_blank">LKG Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/UKG.pdf" target="_blank">UKG Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/1ST.pdf" target="_blank">1st Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/2ND.pdf" target="_blank">2nd Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/3RD.pdf" target="_blank">3rd Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/4TH.pdf" target="_blank">4th Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/5TH.pdf" target="_blank">5th Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/6TH.pdf" target="_blank">6th Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/7TH.pdf" target="_blank">7th Class Result</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Assets/Result/8TH.pdf" target="_blank">8th Class Result</NavLink></li>


                      {/* Add more result links as needed */}
                    </ul>
                  </li>
                  <li><NavLink className="dropdown-item" to="#" >Monthly Result </NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Quarterly Result</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Half Yearly Result</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Surprise Result</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="admissionDropdown" role="button">
                  Admission
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="admissionDropdown">
                  <li><NavLink className="dropdown-item" to="/Addmission">Admission Process</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Fee Structure</NavLink></li>
                  <li><NavLink className="dropdown-item" to="https://forms.gle/jgN2T8C7xiV1TA5w9" target='_blank'>Apply Online</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/ContactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
