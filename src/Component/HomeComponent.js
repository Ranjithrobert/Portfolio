import React from "react";
import  ReactDOM  from "react-dom/client";
const Home =()=>{
  return (
    <body>
      <div>
        <br></br>
          <div class="container-flued">
            <ul class="nav nav-pills nav-justified " id="navigation">
              <li class="nav-item">
                <a class="nav-link active" href="">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/About">
                  About
                </a>
              </li>
            </ul>
          </div>
        <br></br><br></br>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <img
                src="./image/img1.jpeg" alt="my image"  class=" mx-auto d-block" id="image" />
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div class="text-center">
          <h1>Ranjith.R</h1>
          <p>Web Developer</p>
        </div>
        <br></br><br></br>
        <div class="text-center">
            <ul class="nav-item">
            <a href="https://www.facebook.com"  class="fa-brands fa-facebook"  style={{padding:" 0px 25px"}}></a>
            <a href="https://www.instagram.com"  class="fa-brands fa-instagram"style={{padding:" 0px 25px"}}></a>
            <a href="https://www.twitter.com"  class="fa-brands fa-twitter"style={{padding:" 0px 25px"}}></a>
            <a href="https://www.linkedin.com" class="fa-brands fa-linkedin"style={{padding:" 0px 25px"}} ></a>
          </ul>
          

        </div>
      </div>
    </body>
  )
}
export default Home
   