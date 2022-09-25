import React from 'react'
import Contact from './Contact'

function Car() {
  return (
    <div>
      <div  className="car">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>VARIETY OF CARS </h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src="images/car_img1.png" alt="#"/></figure>
                     <h3>Hundai</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src="images/car_img2.png" alt="#"/></figure>
                     <h3>Audi</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src="images/car_img3.png" alt="#"/></figure>
                     <h3>Bmw x5</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end car -->
      <!-- bestCar --> */}
      <div id="contact" className="bestCar">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <div className="row">
                     <div className="col-md-6 offset-md-6">
                        <form className="main_form">
                           <div className="titlepage">
                              <h2>Find A  Best Car For Rent</h2>
                           </div>
                           <div className="row">
                              <div className="col-md-12 ">
                                 <select>
                                    <option value="0">Choose car Make</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                 </select>
                              </div>
                              <div className="col-md-12">
                                 <select>
                                    <option value="0">Choose Car Type </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                 </select>
                              </div>
                              <div className="col-md-12">
                                 <input className="contactus" placeholder="Search" type="Search" name="Search"/>                          
                              </div>
                              <div className="col-md-12">
                                 <select>
                                    <option value="0">Price of Rent</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                 </select>
                              </div>
                              <div className="col-sm-12">
                                 <button className="find_btn">Find Now</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <Contact/> */}
    </div>
  
  )
}

export default Car
