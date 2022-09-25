import React from 'react'

function Contact() {
  return (
    <div>
      <div className="cutomer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What is says our cutomer</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide cutomer_Carousel " data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption ">
                                 <div className="cross_img">
                                    <figure><img src="images/cross_img.png" alt="#"/></figure>
                                 </div>
                                 <div className="our cross_layout">
                                    <div className="test_box">
                                       <h4>Due markes</h4>
                                       <span>Rental</span>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="cross_img">
                                    <figure><img src="images/cross_img.png" alt="#"/></figure>
                                 </div>
                                 <div className="our cross_layout">
                                    <div className="test_box">
                                       <h4>Due markes</h4>
                                       <span>Rental</span>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="cross_img">
                                    <figure><img src="images/cross_img.png" alt="#"/></figure>
                                 </div>
                                 <div className="our cross_layout">
                                    <div className="test_box">
                                       <h4>Due markes</h4>
                                       <span>Rental</span>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
