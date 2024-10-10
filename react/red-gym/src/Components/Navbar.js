

import React from 'react'


export default function Navbar() {
  return (


    <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-dark-custom fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <img src="images/logo.jpg" alt="" width="80px"/>
            </a>
            <a className="navbar-brand" href="index.html"> <h1 className="px-5 text=light">Red <span className="text-red">Gym</span> </h1> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link text-red active" aria-current="page" href="#one">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="#BMI">BMI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="ifit.html">Ifit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="subscription.html">Subscription</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-red" href="#contact">Contact</a>
                    </li>  
                    <li className="nav-item">
                        <a className="nav-link text-red" href="registration.html"><button className="btn btn-success text-light px-3">SignUp/Login</button></a>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}
