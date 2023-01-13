import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";
class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <body>
        <div>
          <div class="text-center" id="header">
            <h1>Ranjith</h1>
            <p>Web Developer</p>
            <div class="container-fluid">
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
          </div>
          <br></br><br></br>
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <img
                  src="./image/img1.jpeg" alt="my image" width="140px" height="160px" class="rounded-circle mx-auto d-block" />
              </div>
              <div class="col-sm-6">
                <h1>CAREER  OBJECTIVE</h1>
                <p>Looking for an opportunity in a Challenging position that allows   me to enhance my skills and also learning </p>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h2>PRO SKILLS</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap v5</li>
                  <li>JavaScript(ES6)</li>
                  <li>React.js (HOOKS,ROUTER,REDUX,API) </li>
                  <li>GitHub</li>
                  <li>Adobe Photoshop(CS6)</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h2>TECHNICAL ACHIEVEMENTS</h2>
                <ul>
                  <li>Learning “Frontend Development-React.js” Course in  Q  Tree Technologies.</li>
                  <li>Certified and Participated on “INTERNET OF THINGS”.</li>
                </ul>
                <br></br>
                <h2>PROJECTS PRESENTED</h2>
                <ul>
                  <li>Wearable Wireless ECG system for long term monitoring using Zigbee.</li>
                  <li>Presented a paper  about Deep analysis of internet of Things (IOT) held at MAHENDRA ENGINEERING COLLEGE Salem</li>
                </ul>
              </div>
            </div>
          </div>
          <br></br>
          <div class="container">
          <div class="col-sm-12">
            <h2>Education</h2>
            <br></br>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>YEAR&SPECIALIZATION</th>
                  <th>COURSE&ISTIUTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2016-2020 (Anna University)</td>
                  <td>BE(ECE)-70% (Excel College of Engineering & Technology,Komarapalayam)</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2015-2016 (State Board)</td>
                  <td>HSC–66% (Govt.,Boys Hr.Sec.School,Nambiyur)</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2013-2014 (State Board)</td>
                  <td>SSLC–80.2% (Govt.,Boys Hr.Sec.School,Nambiyur)</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
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
}
export default About