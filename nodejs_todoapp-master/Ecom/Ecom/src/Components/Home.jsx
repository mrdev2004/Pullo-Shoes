import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
    const navigation=()=>{
        navigate('/shop')
    }
    return (
        <>
        <>
  {/* basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* mobile metas */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  {/* site metas */}
  <title>Pulloshoes</title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  {/* bootstrap css */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* style css */}
  <link rel="stylesheet" href="css/style.css" />
  {/* Responsive*/}
  <link rel="stylesheet" href="css/responsive.css" />
  {/* fevicon */}
  <link rel="icon" href="images/fevicon.png" type="image/gif" />
  {/* Scrollbar Custom CSS */}
  <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
  {/* Tweaks for older IEs*/}
  <link
    rel="stylesheet"
    href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
  />
  {/* owl stylesheets */}
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
    media="screen"
  />
  {/*[if lt IE 9]>

<![endif]*/}
  {/* body */}
  {/* header section start */}
  <div className="header_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="logo" style={{paddingRight:"60%"}}>
            <a href="#">
              <img  src="images/logo.png" />
            </a>
          </div>
        </div>
        <div className="col-sm-9">
         
        </div>
      </div>
    </div>
    <div className="banner_section">
      <div className="container-fluid">
        <section className="slide-wrapper">
          <div className="container-fluid">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text">
                          <strong>Men's Like Plex</strong>
                        </h1>
                        <p className="lorem_text">
                        Welcome to Pullo, your ultimate destination for premium footwear! Explore our diverse collection of stylish and comfortable shoes, from everyday wear to high-performance racing boots. At Pullo, we blend quality craftsmanship with the latest trends, ensuring you step out in confidence, no matter the occasion. Start shopping today and experience unmatched style, comfort, and durability!
                        </p>
                        <button onClick={navigation} className="buy_bt">Buy Now</button>
                        <button onClick={navigation} className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img">
                        <img src="images/running-shoes.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img">
                        <img src="images/running-shoes.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text">
                          <strong>Men's Like Plex</strong>
                        </h1>
                        <p className="lorem_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img">
                        <img src="images/running-shoes.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text">
                          <strong>Men's Like Plex</strong>
                        </h1>
                        <p className="lorem_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img">
                        <img src="images/running-shoes.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  {/* header section end */}
  {/* new collection section start */}
  <div className="layout_padding collection_section">
    <div className="container">
      <h1 className="new_text">
        <strong>New Collection</strong>
      </h1>
      <p className="consectetur_text">
      "Step into style and comfort with our new collection – where cutting-edge design meets everyday versatility."
      </p>
      <div className="collection_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <button className="new_bt">New</button>
              <div className="shoes-img">
                <img src="images/shoes-img1.png" />
              </div>
              <p className="sport_text">Men Sports</p>
              <div className="dolar_text">
                Rs.<strong style={{ color: "#f12a47" }}>950</strong>{" "}
              </div>
              <div className="star_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={navigation} className="seemore_bt">See More</button>
          </div>
          <div className="col-md-6">
            <div className="about-img2">
              <div className="shoes-img2">
                <img src="images/shoes-img2.png" />
              </div>
              <p className="sport_text">Men Sports</p>
              <div className="dolar_text">
                Rs.<strong style={{ color: "#f12a47" }}>900</strong>{" "}
              </div>
              <div className="star_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="collection_section">
    <div className="container">
      <h1 className="new_text">
        <strong>Racing Boots</strong>
      </h1>
      <p className="consectetur_text">
      "Engineered for speed and precision, our racing boots deliver ultimate grip, control, and performance on every track."
      </p>
    </div>
  </div>
  <div className="collectipn_section_3 layuot_padding">
    <div className="container">
      <div className="racing_shoes">
        <div className="row">
          <div className="col-md-8">
            <div className="shoes-img3">
              <img src="images/shoes-img3.png" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="sale_text">
              <strong>
                Sale <br />
                <span style={{ color: "#0a0506" }}>JOGING</span> <br />
                SHOES
              </strong>
            </div>
            <div className="number_text">
              <strong>
                RS. <span style={{ color: "#0a0506" }}>100</span>
              </strong>
            </div>
            <button onClick={navigation}  className="seemore">See More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="collection_section layout_padding">
    <div className="container">
      <h1 className="new_text">
        <strong>New Arrivals Products</strong>
      </h1>
      <p className="consectetur_text">
      "Discover the latest trends with our new arrivals – fresh styles crafted to elevate every step."
      </p>
    </div>
  </div>
  {/* new collection section end */}
  {/* New Arrivals section start */}
  <div className="layout_padding gallery_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon">
              <img src="images/shoes-img4.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>650</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon">
              <img src="images/shoes-img5.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon">
              <img src="images/shoes-img6.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>580</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon">
              <img src="images/shoes-img7.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon">
              <img src="images/shoes-img8.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon">
              <img src="images/shoes-img9.png" />
            </div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/star-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">
                  Rs. <span style={{ color: "#ff4e5b" }}>900</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buy_now_bt">
        <button onClick={navigation} className="buy_text">Buy Now</button>
      </div>
    </div>
  </div>
  {/* New Arrivals section end */}
  {/* contact section start */}

  {/* contact section end */}
  {/* section footer start */}
  <div className="section_footer">
    <div className="container">
      <div className="mail_section">
        <div className="row">
          <div className="col-sm-6 col-lg-2">
            <div>
              <a href="#">
                <img src="images/footer-logo.png" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="footer-logo">
              <img src="images/phone-icon.png" />
              <span className="map_text">(91) 8000054035 <br/> 9023659916 </span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-logo">
              <img src="images/email-icon.png" />
              <span className="map_text">Dkpullo1@gmail.com</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="social_icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/fb-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/twitter-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/in-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/google-icon.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
      <div className="footer_section_2">
        <div className="row">
          <div className="col-sm-4 col-lg-2">
            
          </div>
          <div className="col-sm-4 col-lg-2">
            <h2 className="shop_text">Address </h2>
            <div className="image-icon">
              <img src="images/map-icon.png" />
              <span className="pet_text">
                UG-4 Ghod Dod Rd,Rangila Park,
                Athwa,Surat,
                Gujarat,395007,India
              </span>
            </div>
          </div>
          <div className="col-sm-4 col-md-6 col-lg-3">
            <h2 className="shop_text">Our Company </h2>
            <div className="delivery_text">
              <ul>
                <li>Delivery</li>
                <li>Legal Notice</li>
                <li>About us</li>
                <li>Secure payment</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h2 className="adderess_text">Products</h2>
            <div className="delivery_text">
              <ul>
                <li>Prices drop</li>
                <li>New products</li>
                <li>Best sales</li>
                <li>Contact us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <h2 className="adderess_text">Newsletter</h2>
            <div className="form-group">
              <input
                type="text"
                className="enter_email"
                placeholder="Enter Your email"
                name="Name"
              />
            </div>
            <button className="subscribr_bt">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* section footer end */}
  {/* Javascript files*/}
  {/* sidebar */}
  {/* javascript */}
</>

        </>

    )
}

export default Home