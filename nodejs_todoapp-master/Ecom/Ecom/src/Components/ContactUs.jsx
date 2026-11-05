import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Update state as user types in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thanks for feedback');
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };
  return (
    <>
    {/* basic */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* mobile metas */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
    {/* site metas */}
    <title>Shoes</title>
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
    <div className="header_section header_main">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo">
            
            </div>
          </div>
          <div className="col-sm-9">
                     </div>
        </div>
      </div>
    </div>
    {/* contact section start */}
    <div className="collection_text">Contact Us</div>
      <div className="layout_padding contact_section">
        <div className="container">
          <h1 className="new_text">
            <strong>Contact Now</strong>
          </h1>
        </div>
        <div className="container-fluid ram">
          <div className="row">
            <div className="col-md-6">
              <div className="email_box">
                <div className="input_main">
                  <div className="container">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="email-bt"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="massage-bt"
                          placeholder="Message"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="send_btn">
                        <button type="submit" className="main_bt">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shop_banner">
                <div className="our_shop">
                  <button className="out_shop_bt">Our Shop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
}

export default ContactUs