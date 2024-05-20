import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="contact-us-container bg-primary text-white">
          <div className="contact-us mt-5">
            <div className="contact-details">
              <h2 className='mt-5 mb-4'>Contact Us</h2>
              <p>
                Ward No 7, <br />
                Dewalgaow, Lanji <br />
                Balaghat - 481224. Madhya Pradesh.
              </p>
              <p>
                <strong>Email Address:</strong> <a href="mailto:mpsdvalgaon@gmail.com" style={{ color: 'white' }} >mpsdvalgaon@gmail.com</a> <br />
                <strong>Telephone No:</strong> 8889228075 <br />
                <strong>Dise Number:</strong> 23450806104
              </p>
            </div>
            <div className="quick-links text-white">
              <h2 className='mt-5'>Quick Links</h2>
              <ul className='text-white list-unstyled'>
                <li><NavLink to="/OurMission">About Us</NavLink></li>
                <li><NavLink to="/OurMission">Why MPS</NavLink></li>
                <li><NavLink to="#">Download Brochure</NavLink></li>
                <li><NavLink to="/Addmission">Admissions</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="social-icons d-flex justify-content-center">
            <ul className='icon-list list-unstyled d-flex'>
              <li className="mx-2"><NavLink to="#"><FontAwesomeIcon icon={faFacebook} /></NavLink></li>
              <li className="mx-2"><NavLink to="#"><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
              <li className="mx-2"><NavLink to="#"><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
            </ul>
          </div>
          <div className="copyright pb-3">
            <p>&copy; Copyright 2024. All rights reserved.</p>
            <p>Chuneshwar Karanjekar (Full Stack Developer)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer