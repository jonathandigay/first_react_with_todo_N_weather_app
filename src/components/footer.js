import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer_wrapper">
        <div className="footerone">
          <div className="about_me">
            <p>About</p>
            <p>Skills</p>
            <p>Support</p>
            <p>Term of Service</p>
            <p></p>
          </div>


          <div className="concern" >
            <input type="text" placeholder="Send Concern.." />
            <button>Submit</button>
          </div>


          <div className="social_media">
            <a href="https://www.facebook.com/jonathanPdigay/"><i className="fab fa-facebook"></i></a>
            <a href="https://github.com/jonathanDigay"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/digay/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footertwo">
          <h3><span>D</span>iga<span>Y</span><span>R</span>eac<span>T</span></h3>
          <p className="p"><em> Created by:Jonathan Digay</em></p>
        </div>


      </div>
    </div>
  )
}
