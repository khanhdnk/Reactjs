import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { TestHTML } from '../App';
import { Button } from 'react-bootstrap';
import { TestRenderjs } from './../testRender/test'

import './../App.css'


export function Navbarhtml() {
  return (
    <>
        <div className="container">
    <nav>
      <ul>
        <li><a href="#" className="logo">
          <img src="https://icon-library.com/images/icon-api/icon-api-24.jpg" alt=""/>
          <span className="nav-item">DashBoard</span>
        </a></li>
        
        <li><a href="#">
          <i className="fas fa-home"></i>
          <span className="nav-item">Home</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-user"></i>
          <span className="nav-item">Profile</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-wallet"></i>
          <span className="nav-item">Wallet</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-chart-bar"></i>
          <span className="nav-item">Analytics</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-tasks"></i>
          <span className="nav-item">Tasks</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-cog"></i>
          <span className="nav-item">Settings</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-question-circle"></i>
          <span className="nav-item">Help</span>
        </a></li>
        <li><a href="" className="logout">
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-item">Log out</span>
        </a></li>
      </ul>
    </nav>

  </div>
    </>
  );
}

export default Navbarhtml;
