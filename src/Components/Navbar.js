import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">School Name</NavLink>
        {/* <!-- Toggle menu --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 ">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/OurMission">Our Mission</NavLink></li>
                <li><NavLink className="dropdown-item" to="/PrincipleMsg">Principal's Message</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="#">Academic Calendar</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Syllabus</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Uniform</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Gallary">Gallery</NavLink>
            </li>
            <li className="nav-item dropdown" >
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Results</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="#">Monthly Result</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Quarterly Result</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Half Yearly Result</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Surprise Result</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Main/Final Result</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">Admission</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="#">Admission Process</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Fee Structure</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Apply Online</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
            </li>

          </ul>
        </div>

      </nav>


    </>
  )
}

export default Navbar;