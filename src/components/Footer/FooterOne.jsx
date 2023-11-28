import React from "react";
import './FooterOne.css'  
export default function FooterOne() {
  return (
      <div className="footerOne">
        <div className="footerOneRow1">
          <img
            src="https://images.leverageedu.com/landing-pages/logo-dark.svg"
            alt="logo"
            className="footerOneRow1Image"
          />
          <div className="footerOneRow1Text">
            End-to-end support for your study abroad journey
          </div>
          <div className="footerOneRow1Social">
            <i class="fi fi-brands-instagram"></i>
            <i class="fi fi-brands-youtube"></i>
            <i class="fi fi-brands-twitter"></i>
            <i class="fi fi-brands-linkedin"></i>
            <i class="fi fi-brands-facebook"></i>
          </div>
        </div>
        <div className="footerOneRow2">
          <div className="f1r2Call">
            <div className="contentHead">Call Us</div>
            <div className="contentText">1800-572-000</div>
          </div>
          <div className="f1r2GenEnquiry">
            <div className="contentHead">General Enquiries</div>
            <div className="contentText">hello@leverageedu.com</div>
          </div>
          <div className="f1r2Press">
            <div className="contentHead">Press</div>
            <div className="contentText">press@leverageedu.com</div>
          </div>
              </div>
              <div className="footerOneRow3">
                  <div className="contentHead">Download Leverage App</div>
                  <div className="f1r3GetApp">
                      <div className="appQR"><img src="https://images.leverageedu.com/homepage/appqr.png" alt="" /></div>
                      <div className="getApp">click</div>
                  </div>
              </div>
      </div>

  );
}
