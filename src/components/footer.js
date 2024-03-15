import {Link } from "react-router-dom";
export default function Footer()
{
    return (
      <div>
       <section class="info_section ">
    <div class="container">
      <div class="info_container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_logo">
              <Link to ="">
                <img src="images/logo.png" alt=""/>
                <span>
                  Lodge
                </span>
              </Link >
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <Link to ="">
                <img src="images/location.png" alt=""/>
                <span>
                  Address
                </span>
              </Link >
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <Link to ="">
                <img src="images/phone.png" alt=""/>
                <span>
                  +01 1234567890
                </span>
              </Link >
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <Link to ="">
                <img src="images/mail.png" alt=""/>
                <span>
                  demo@gmail.com
                </span>
              </Link >
            </div>
          </div>
        </div>
        <div class="info_form">
          <div class="d-flex justify-content-center">
            <h5 class="info_heading">
              Newsletter
            </h5>
          </div>
          <form action="">
            <div class="email_box">
              <label for="email2">Enter Your Email</label>
              <input type="text" id="email2"/>
            </div>
            <div>
              <button>
                subscribe
              </button>
            </div>
          </form>
        </div>
        <div class="info_social">
          <div class="d-flex justify-content-center">
            <h5 class="info_heading">
              Follow Us
            </h5>
          </div>
          <div class="social_box">
            <Link to ="">
              <img src="images/fb.png" alt="/"/>
            </Link >
            <Link to ="">
              <img src="images/twitter.png" alt=""/>
            </Link >
            <Link to ="">
              <img src="images/linkedin.png" alt=""/>
            </Link >
            <Link to ="">
              <img src="images/insta.png" alt=""/>
            </Link >
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="container-fluid footer_section">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <Link to ="https://html.design/">Free Html Templates</Link >
    </p>
  </section>

  </div>
    )
}