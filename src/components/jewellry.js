
import {Link} from "react-router-dom";


export default function Jewellry()
{
    return(
        <>
         <section className="price_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Jewellery Price
        </h2>
      </div>
      <div className="price_container">
        <div className="box">
          <div className="name">
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/p-1.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              $<span>1000.00</span>
            </h5>
            <Link to="">
              Buy Now
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="name">
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/i-2.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
                
              $<span>1000.00</span>
            </h5>
            <Link  to="">
              Buy Now
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="name">
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/i-3.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              $<span>1000.00</span>
            </h5>
            <Link to ="">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="" className="price_btn">
          See More
        </Link>
      </div>
    </div>
  </section>

        </>
    )
}