import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navigation extends Component {

  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><Link to="/" className="nav-link scrollto active" >Healthcare System</Link></h1>


          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link to="/" className="nav-link scrollto" >Home</Link></li>
              <li className="dropdown nav-link scrollto "><Link to="/doctors" >Doctors </Link>
                <ul>
                  <li><Link to="/orari" >Orari</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-link scrollto "><Link to="/nurse" >Nurses </Link>
                <ul>
                  <li><Link to="/OrariNur" >Orari</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-link scrollto "><Link to="/patients" >Patients </Link>
                <ul>
                  <li><Link to="/medication" >Medikamentet</Link></li>
                  <li><Link to="/diagnose" >Diagnoza</Link></li>
                  <li><Link to="/faktura" >Faktura</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-link scrollto "><Link to="/diets" >Diets </Link>
                <ul>
                  <li><Link to="/DietFood" >Diet Food</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-link scrollto "><Link to="/department" >Department </Link>
                <ul>
                  <li><Link to="/room" >Rooms</Link></li>
                  <li><Link to="/lab" >Laboratori</Link></li>
                </ul>
              </li>
              <li><Link to="/ambullanca" className="nav-link scrollto" >Transporti</Link></li>
              <li><Link to="/login" className="nav-link scrollto" >Login</Link></li>
            </ul>
          </nav>
          <a href="/#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
        </div>
      </header>
    )
  }
}

<li className="dropdown"><Link to="/department" ><span>Departments</span> <i className="bi bi-chevron-down"></i></Link>
  <ul>
    <li><Link to="" >Neurology</Link></li>
    <li><Link to="" >Cardiology</Link></li>
    <li><Link to="" >Pneumonology</Link></li>
    <li><Link to="" >Oncology</Link></li>
  </ul>
</li>