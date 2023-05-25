import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="footerCard">
        <div className="footerCardTitle">BLOG</div>
        <div className="footerCardContent">
          <div className="footerCardContentRow">
            <div>Data Analyst</div>
            <div>Web Developer</div>
          </div>
          <div className="footerCardContentRow">
            <div>Career</div>
            <div>Sucess Stories</div>
            <div>Resume</div>
          </div>
          <div className="footerCardContentRow">
            <div>Hard Skills</div>
            <div>Soft Skills</div>
          </div>
        </div>
      </div>
      <div className="footerCard">
        <div className="footerCardTitle">OUR COURSES</div>
        <div className="footerCardContent">
          <div className="footerCardContentRow">
            <div>Data Analytics</div>
            <div>Web Development</div>
          </div>
        </div>
      </div>
      <div className="footerCard">
        <div className="footerCardTitle">Follow Us</div>
        <div className="footerCardContent">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <i className="fa fa-telegram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
      </div>
      <div className="footerCard">
        <div className="footerCardTitle">© Refocus Limited 2022</div>
        <div className="footerCardContent">
          <div className="footerCardContentRow">
            <div>Privacy Policy</div>
            <div>·</div>
            <div>Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
