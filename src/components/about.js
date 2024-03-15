
import {useSelector} from "react";

import {Link} from "react-router-dom"
export default function About()
{

  
    return(
        <>
    
     <section className="about_section layout_padding2-top layout_padding-bottom">
    <div className="design-box">
      <img src="images/design-2.png" alt=""/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Jewellery Shop
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud
            </p>
            <div>
              <Link to="">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    </>
    )
}