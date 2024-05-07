import { Link } from "react-router-dom";


export default function Home() {
  return (

    <div>
      <div class="hero_area">
        <section className=" slider_section position-relative">
          <div className="design-box">
            <img src="images/design-1.png" alt="" />
          </div>

          <div className="slider_number-container d-none d-md-block">
            <div className="number-box">
              <span>
                01
              </span>
              <hr />
              <span className="jwel">
                J <br />
                e <br />
                w <br />
                e <br />
                l <br />
                l <br />
                e <br />
                r <br />
                y
              </span>
              <hr />
              <span>
                02
              </span>
            </div>
          </div>
          <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h2>
                          <span> New Collection</span>
                          <hr />
                        </h2>
                        <h1>
                          Jewellery
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                          aptent taciti sociosqu ad litora torquent per conubia nostra
                        </p>
                        <div>
                          <Link to="">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h2>

                          <span> New Collection</span>
                          <hr />
                        </h2>
                        <h1>
                          Jewellery<br />

                          shopping                      </h1>
                        <p>
                          Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                          aptent taciti sociosqu ad litora torquent per conubia nostra
                        </p>
                        <div>
                          <Link to="">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h2>
                          <span> New Collection</span>
                          <hr />
                        </h2>
                        <h1>
                          Jewellery
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                          aptent taciti sociosqu ad litora torquent per conubia nostra
                        </p>
                        <div>
                          <Link to="">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>


      <div className="container ">
        <div class="item_section layout_padding2 pb-5">
          <div class="container">
            <div class="item_container">
              <div class="box">
                <div class="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div class="img-box">
                  <img src="images/i-1.png" alt="" />
                </div>
                <div class="name">
                  <h5>
                    Bracelet
                  </h5>
                </div>
              </div>
              <div class="box">
                <div class="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div class="img-box">
                  <img src="images/i-2.png" alt="" />
                </div>
                <div class="name">
                  <h5>
                    Ring
                  </h5>
                </div>
              </div>
              <div class="box">
                <div class="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div class="img-box">
                  <img src="images/i-3.png" alt="" />
                </div>
                <div class="name">
                  <h5>
                    Earings
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script type="text/javascript" src="js/custom.js"></script>


    </div>


  )
}