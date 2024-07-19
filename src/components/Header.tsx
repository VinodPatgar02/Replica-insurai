const Header: React.FC = () => {
    return (
        <header className="tp-header-height">
        <div className="header-area-start">
           <div className="tp-header-top-area tp-green-bg tp-border-bottom section-plr d-none d-lg-block">
              <div className="container-fluid">
                 <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-9">
                       <div className="tp-header-top-info tp-header-top-info-home">
                          <ul>
                             <li>
                                <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"><i className="fa-sharp fa-regular fa-location-dot"></i> Manchester 21, Zurich, CH</a>
                             </li>
                             <li>
                                <a href="mailto:example@gmaol.com"><i className="fa-regular fa-envelope"></i> example@gmail.com</a>
                             </li>
                             <li className="tp-top-menu">
                                <a href="#">Make a Claim</a>
                                <a href="#">Services</a>
                                <a href="#">Solution Center</a>
                             </li>
                          </ul>
                       </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                       <div className="tp-header-social-icon tp-header-social-icon-home d-flex justify-content-end">
                          <span>Follow Us On</span>
                          <a href="#"><i className="fa-brands fa-facebook"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="header-bootom-area tp-header-menu-spacing section-plr p-relative tp-white-bg" id="tp-header-sticky">
              <div className="container-fluid">
                 <div className="row align-items-center">
                    <div className="col-xxl-2 col-xl-2 col-6">
                       <div className="tp-logo">
                          <a href="index.tsx">
                             <img src="public/assets/img/logo/logo-3.svg" alt="logo"/>
                          </a>
                       </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                       <div className="tp-main-menu tp-main-menu-home">
                          <nav className="tp-main-menu-content">
                             <ul>
                                <li className="has-dropdown position-static">
                                   <a href="index.tsx">Home</a>
                                   <div className="tp-submenu submenu has-homemenu">
                                      <div className="row gx-6 row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-1.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index.tsx">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index1-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index.tsx">Main Home</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-2.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-2.html">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index2-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-2.html">Family Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-3.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-3.html">Multi Page</a> 
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index3-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-3.html">Home Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-4.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-4.html">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index4-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-4.html">Business Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-5.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-5.html">Multi Page</a> 
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index5-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-5.html">Health Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-6.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-6.html">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index6-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-6.html">Car Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-7.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-7.html">Multi Page</a> 
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index7-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-7.html">Pet Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-8.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-8.html">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index8-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-8.html">Travel Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                               <img src="public/assets/img/menu/img-9.jpg" alt=""/>
                                               <div className="homemenu-btn">
                                                  <a className="menu-btn tp-btn" href="index-9.html">Multi Page</a>
                                                  <a className="menu-btn tp-btn tp-btn-green" href="index9-one-page.html">One Page</a>
                                               </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="index-9.html">Marriage Insurance</a>
                                               </h4>
                                            </div>
                                         </div>
                                         <div className="col homemenu">
                                            <div className="homemenu-thumb tp-menu-blur-thumb mb-15">
                                               <img src="public/assets/img/menu/img-2.jpg" alt=""/>
                                            </div>
                                            <div className="homemenu-content text-center">
                                               <h4 className="homemenu-title">
                                                  <a href="#">Comming Soon</a>
                                               </h4>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </li>
                                <li className="has-dropdown">
                                   <a href="insurance-1.html">Insurance</a>
                                   <ul className="tp-submenu submenu">
                                      <li><a href="insurance-1.html">Insurance 01</a></li>
                                      <li><a href="insurance-2.html">Insurance 02</a></li>
                                      <li><a href="insurance-details.html">Insurance Details</a></li>
                                   </ul>
                                </li>
                                <li className="has-dropdown">
                                   <a href="#">Pages</a>
                                   <ul className="tp-submenu submenu">
                                      <li><a href="about.html">About</a></li>
                                      <li><a href="team.html">Team</a></li>
                                      <li><a href="team-details.html">Team Details</a></li>
                                      <li><a href="shop.html">Shop</a></li>
                                      <li><a href="shop-details.html">Shop Details</a></li>
                                      <li><a href="cart.html">Cart</a></li>
                                      <li><a href="checkout.html">Checkout</a></li>
                                      <li><a href="testimonial.html">Testimonial</a></li>
                                      <li><a href="pricing.html">Pricing</a></li>
                                      <li><a href="faq.html">Faq</a></li>
                                      <li><a href="error.html">Error</a></li>
                                   </ul>
                                </li>
                                <li className="has-dropdown">
                                   <a href="portfolio.html">Portfolio</a>
                                   <ul className="tp-submenu submenu">
                                      <li><a href="portfolio.html">portfolio</a></li>
                                      <li><a href="portfolio-details.html">portfolio Details</a></li>
                                   </ul>
                                </li>
                                <li className="has-dropdown">
                                   <a href="blog.html">Blog</a>
                                   <ul className="tp-submenu submenu">
                                      <li><a href="blog.html">Blog</a></li>
                                      <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                      <li><a href="blog-details.html">Blog Details</a></li>
                                   </ul>
                                </li>
                                <li>
                                   <a href="contact.html">Contact</a>
                                </li>
                             </ul>
                          </nav>
                       </div>
                    </div>
                    <div className="col-xxl-5 col-xl-4 col-6">
                       <div className="tp-header-right-action tp-header-right-home d-none d-xl-block">
                          <ul className="d-flex align-items-center justify-content-end">
                           <li>
                              <div className="tp-header-search lineheight-1">
                                 <button className="search-click search-click-home">
                                    <i className="flaticon-search"></i>
                                 </button>
                              </div>
                           </li>
                           <li className="tp-header-border">
                              <div className="tp-header-cart lineheight-1">
                                 <button className="click-cart tp-header-cart-home cartmini-open-btn p-relative">
                                    <i className="flaticon-shopping-cart"></i>
                                    <span className="cartmini-item-count p-absolute">3</span>
                                 </button>
                              </div>
                           </li>
                           <li>
                               <div className="tp-header-btn tp-header-btn-home">
                               <a className="tp-btn tp-btn-yellow-2" href="contact.html">Get a Quote</a>
                               </div>
                           </li>
                           <li className="d-none d-xxl-block">
                               <div className="tp-header-tel-box tp-header-tel-box-home ml-30 d-flex align-items-center">
                                   <div className="tp-header-tel-icon">
                                       <span>
                                           <i className="flaticon-telephone"></i>
                                       </span>
                                   </div>
                                   <div className="tp-header-tel-text tp-header-tel-text-home">
                                       <span>Talk to an expert </span>
                                       <a href="tel:+99(786)8765">Free +99 (786) 8765</a>
                                   </div>
                               </div>
                           </li>
                          </ul>
                       </div>
                       <div className="tp-main-menu-bar tp-menu-bar tp-header-hamburger-toogle tp-header-hamburger d-block d-xl-none">
                          <span></span>
                          <span></span>
                          <span></span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="tpoffcanvas-area">
           <div className="tpoffcanvas">
              <div className="tpoffcanvas__close-btn">
                 <button className="close-btn"><i className="fal fa-times"></i></button>
              </div>
              <div className="tpoffcanvas__logo">
                 <a href="index.html">
                    <img src="public/assets/img/logo/logo.svg" alt="logo"/>
                 </a>
              </div>
              <div className="tp-main-menu-mobile d-xl-none"></div>
                 <div className="tpoffcanvas-btn-1 mb-50">
                    <a className="tpoffcanvas-btn" href="contact.html">GET STARTED</a>
                 </div>
              <div className="tpoffcanvas__contact-info">
                 <div className="tpoffcanvas__contact-title">
                    <h5>Contact us</h5>
                 </div>
                 <ul>
                    <li>
                       <i className="fa-light fa-location-dot"></i>
                       <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z" target="_blank">Manchester 21, Zurich, CH</a>
                    </li>
                    <li>
                       <i className="fas fa-envelope"></i>
                       <a href="mailto:alizoinfo@gmail.com"><span>insuraiinfo@gmail.com</span></a>
                    </li>
                    <li>
                       <i className="flaticon-telephone"></i>
                       <a href="tel:(+00)67834598568">+ 999 2123 5468 5894</a>
                    </li>
                 </ul>
              </div>
              <div className="tpoffcanvas__social">
                 <div className="social-icon">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                 </div>
              </div>
           </div>
        </div>
        <div className="body-overlay"></div>
        <div className="tp-search-body-overlay"></div>
        <div className="tp-search-form-toggle">
           <div className="tp-search-close">
              <i className="fa-solid fa-xmark"></i>
           </div>
           <div className="container">
              <div className="row justify-content-center">
                 <div className="col-lg-6">
                    <div className="tp-search-form">
                       <form action="#">
                          <input type="text" placeholder="What Are You Looking Foor?" required/>
                          <div className="tp-search-form-icon">
                             <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                             </button>
                          </div>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="cartmini__area">
           <div className="cartmini__wrapper d-flex justify-content-between flex-column">
              <div className="cartmini__top-wrapper ">
                 <div className="cartmini__top p-relative">
                    <div className="cartmini__title">
                       <h4>Shopping cart</h4>
                    </div>
                    <div className="cartmini__close">
                       <button type="button" className="cartmini__close-btn cartmini-close-btn"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
                 <div className="cartmini__widget">
                    <div className="cartmini__widget-item">
                       <div className="cartmini__thumb">
                          <a href="product-details.html">
                             <img src="public/assets/img/cart/product-1.jpg" alt=""/>
                          </a>
                       </div>
                       <div className="cartmini__content">
                          <h5><a href="product-details.html">Level Bolt Smart Lock</a></h5>
                          <div className="cartmini__price-wrapper">
                             <span className="cartmini__price">$46.00</span>
                             <span className="cartmini__quantity">x2</span>
                          </div>
                       </div>
                       <button className="cartmini__del"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="cartmini__widget-item">
                       <div className="cartmini__thumb">
                          <a href="product-details.html">
                             <img src="public/assets/img/cart/product-2.jpg" alt=""/>
                          </a>
                       </div>
                       <div className="cartmini__content">
                          <h5><a href="product-details.html">Trademil for younger</a></h5>
                          <div className="cartmini__price-wrapper">
                             <span className="cartmini__price">$78.00</span>
                             <span className="cartmini__quantity">x1</span>
                          </div>
                       </div>
                       <button className="cartmini__del"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="cartmini__widget-item">
                       <div className="cartmini__thumb">
                          <a href="product-details.html">
                             <img src="publicassets/img/cart/product-3.jpg" alt=""/>
                          </a>
                       </div>
                       <div className="cartmini__content">
                          <h5><a href="product-details.html">ViewSonic VP2756-2K</a></h5>
                          <div className="cartmini__price-wrapper">
                             <span className="cartmini__price">$98.00</span>
                             <span className="cartmini__quantity">x3</span>
                          </div>
                       </div>
                       <button className="cartmini__del"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
                 <div className="cartmini__empty text-center d-none">
                    <img src="public/assets/img/cart/empty-cart.png" alt=""/>
                    <p>Your Cart is empty</p>
                    <a href="shop.html" className="cartmini-btn">Go to Shop</a>
                 </div>
              </div>
              <div className="cartmini__checkout">
                 <div className="cartmini__checkout-title mb-30">
                    <h4>Subtotal:</h4>
                    <span>$113.00</span>
                 </div>
                 <div className="cartmini__checkout-btn">
                    <a href="cart.html" className="cartmini-btn mb-10 w-100"> <span></span> view cart</a>
                    <a href="checkout.html" className="cartmini-btn-border w-100"> <span></span> checkout</a>
                 </div>
              </div>
           </div>
        </div>
        <div className="cartmini-overlay"></div>
     </header>
    );
  };
  
  export default Header;