import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg  border-bottom Navbar-custom fixed-top " >
        <div class="container ">
        <form class="d-flex" role="search">
          <Link  class="navbar-brand col-5 " to="/">
           <img src="media\assets\logo.svg"  alt="logo"  style={{width:"20%",marginLeft:"5rem"}}/>
          </Link >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-7 " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-2 ">
              <li class="nav-item ">
                <Link  class="nav-link " aria-current="page" to="/signup">
                Signup
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/about">
                About
                </Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
              Products
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/pricing">
              Pricing
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link"to="/support">
               Support
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/">
                <i class="fa-solid fa-bars"></i>
                </Link >
              </li>
             
              
            </ul>
           
          </div>
          </form>
        </div>
      </nav>
 
  );
}

export default Navbar;
