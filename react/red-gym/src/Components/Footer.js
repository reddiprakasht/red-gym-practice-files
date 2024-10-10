import React from 'react'

export default function Footer() {
  return (
    <div>
      
      {/* <!-- Footer --> */}
    <footer className="footer text-light bg-dark-custom py-5">
        <div className="container">
            <div className="row">
                {/* <!-- Column 1 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
                    <h5 className="text-red mb-3">Company</h5>
                    <ul className="list-unstyled">
                        <li><a href="index.html" className="text-light text-decoration-none d-block mb-2">Home</a></li>
                        <li><a href="about.html" className="text-light text-decoration-none d-block mb-2">About Us</a></li>
                        <li><a href="#services" className="text-light text-decoration-none d-block mb-2">Services</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Subscription</a></li>
                        <li><a href="#contact" className="text-light text-decoration-none d-block mb-2">Contact Us</a></li>
                    </ul>
                </div>
                {/* <!-- Column 2 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
                    <h5 className="text-red mb-3">Programs</h5>
                    <ul className="list-unstyled">
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Personal Training</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Group classNamees</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Nutrition Advice</a></li>
                        <li><a href="ifit.html" className="text-light text-decoration-none d-block mb-2">Ifit</a></li>
                        <li><a href="#BMI" className="text-light text-decoration-none d-block mb-2">BMI Calculator</a></li>
                    </ul>
                </div>
                {/* <!-- Column 3 --> */}
                <div className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
                    <h5 className="text-red mb-3">Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Privacy Policy</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Terms of Service</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">FAQ</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Careers</a></li>
                        <li><a href="subscription.html" className="text-light text-decoration-none d-block mb-2">Events</a></li>
                    </ul>
                </div>
                {/* <!-- Column 4 --> */}
                <div className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
                    <h5 className="text-red mb-3">Follow Us</h5>
                    <ul className="list-unstyled d-flex flex-wrap">
                        <li className="me-3 mb-3">
                            <a href="subscription.html" className="text-light text-decoration-none" target="_blank">
                                <i className="fab fa-facebook-f fa-lg"></i> Facebook
                            </a>
                        </li>
                        <li className="me-3 mb-3">
                            <a href="subscription.html" className="text-light text-decoration-none" target="_blank">
                                <i className="fab fa-instagram fa-lg"></i> Instagram
                            </a>
                        </li>
                        <li className="me-3 mb-3">
                            <a href="subscription.html" className="text-light text-decoration-none" target="_blank">
                                <i className="fab fa-twitter fa-lg"></i> Twitter
                            </a>
                        </li>
                        <li className="me-3 mb-3">
                            <a href="subscription.html" className="text-light text-decoration-none" target="_blank">
                                <i className="fab fa-linkedin-in fa-lg"></i> LinkedIn
                            </a>
                        </li>
                        <li className="me-3 mb-3">
                            <a href="subscription.html" className="text-light text-decoration-none" target="_blank">
                                <i className="fab fa-youtube fa-lg"></i> YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-3 border-top border-light">
                <p className="mb-0 copyrights">&copy; 2024 Red Gym. All Rights Reserved By Niranjan and Team.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
