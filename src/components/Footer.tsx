import React from 'react';
const Footer: React.FC = () => {
    return (
      <footer>
        <div className="tp-footer-area tp-dark-bg pt-120 pb-15">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tp-footer-widget">
                  <div className="tp-footer-logo mb-30">
                    <a href="index.html"><img src="public/assets/img/logo/logo-white.svg" alt="logo" /></a>
                  </div>
                  <div className="tp-footer-widget-social-family tp-footer-widget-social-home">
                    <p>West Palm Besach,304 Donald<br />Gardens 234 FL 33410</p>
                    <a className="tp-footer-widget-social-phone mb-25" href="tel:(+00)67834598568">(+00) 678 345 98568</a>
                    <div className="tp-footer-widget-social-info tp-footer-widget-social-info-home">
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tp-footer-widget-family tp-footer-family-col-2">
                  <h4 className="tp-footer-widget-title-family tp-footer-widget-title-home mb-20">Information</h4>
                  <div className="tp-footer-widget-link-family tp-footer-widget-link-home">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="#"> About US</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tp-footer-widget-family tp-footer-family-col-3">
                  <h4 className="tp-footer-widget-title-family tp-footer-widget-title-home mb-20">Support</h4>
                  <div className="tp-footer-widget-link-family tp-footer-widget-link-home">
                    <ul>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Tearms & Condition</a>
                      </li>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                      <li>
                        <a href="#">Company Privacy</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-9 mb-50">
                <div className="tp-footer-widget-social-family tp-footer-family-col-4">
                  <h4 className="tp-footer-widget-title-family tp-footer-widget-title-home mb-25">Latest Post</h4>
                  <div className="tp-footer-post-wrapper d-flex align-items-center mb-15">
                    <a href="blog-details.html"> <img className="tp-footer-post-thumb" src="public/assets/img/footer/home/01.jpg" alt="home" /></a>
                    <div className="tp-footer-post-content">
                      <span>20 Jan 2024</span>
                      <h5 className="tp-footer-post-title"><a href="#">Wise Spending Habits, 13 for Maximizing Your</a></h5>
                    </div>
                  </div>
                  <div className="tp-footer-post-wrapper d-flex align-items-center">
                    <a href="#"><img className="tp-footer-post-thumb" src="public/assets/img/footer/home/02.jpg" alt="home" /></a>
                    <div className="tp-footer-post-content">
                      <span>20 Jan 2024</span>
                      <h5 className="tp-footer-post-title"><a href="blog-details.html">Save with our lowest ever fixed rate home loan</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-copyright tp-footer-copyright-home">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-footer-copyright-text tp-footer-copyright-text-home text-center">
                  <p>Full Copyright & Design By <a href="#"> @Theme pure</a> – <span id="year"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  