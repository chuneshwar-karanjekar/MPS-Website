import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
      {/* <footer className="footer mt-10">
      <div className=" bg-primary text-light p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>Contact Us</h3>
            <p>123 School Street, City, Country</p>
            <p>Email: info@school.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="text-light col-lg-4 col-md-6 col-sm-12">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li><NavLink href="#">Home</NavLink></li>
              <li><NavLink href="#">About</NavLink></li>
              <li><NavLink href="#">Academics</NavLink></li>
              <li><NavLink href="#">Admissions</NavLink></li>
              <li><NavLink href="#">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media</p>
            <ul className="social-icons">
              <li><NavLink href="#"><i className="fa fa-facebook"></i></NavLink></li>
              <li><NavLink href="#"><i className="fa fa-twitter"></i></NavLink></li>
              <li><NavLink href="#"><FaInstagram /></NavLink></li>
              <li><NavLink href="#"><i className="fa fa-linkedin"></i></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-success">
        <div className="row footer-links">
          <div className="col-6 text-center text-white pt-2">
            <p >&copy; Copyright Maitriy Public School | Dewalgaw</p>
          
          </div>
          <div className="col-6 text-center text-white pt-2">
            <p>Developed by Chuneshwar Karanjekar (Full Stack Developer)</p>
          </div>
        </div>
      </div>
    </footer> */}

      <div className=''>
        <div className="contact-us-container bg-primary text-white">
          <div className="contact-us mt-5">
            <div className="contact-details">
              <h2 className='mt-5 mb-4'>Contact Us</h2>
              <p>
                Kakda Farms, K-Sector, <br />
                Opposite Eco Green City, <br />
                Ayodhya Bypass Road, <br />
                Bhopal - 462010. Madhya Pradesh.
              </p>
              <p>
                <strong>Email Address:</strong> admissions@podar.org <br />
                <strong>Telephone No:</strong> 8527432080 <br />
                <strong>Affiliation Number:</strong> 1031179
              </p>
            </div>
            <div className="quick-links text-white">
              <h2 className='mt-5'>Quick Links</h2>
              <ul className='text-white list-unstyled'>
                <li><NavLink to="#">About Us</NavLink></li>
                <li><NavLink to="#">Why MPS</NavLink></li>
                <li><NavLink to="#">Download Brochure</NavLink></li>
                <li><NavLink to="#">Admissions</NavLink></li>
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