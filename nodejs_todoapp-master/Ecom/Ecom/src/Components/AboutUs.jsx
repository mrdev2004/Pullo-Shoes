import React from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom'
const AboutUs = () => {
  const Navigate = useNavigate()
  return (

<div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container">
    <p className="text-blk heading">About Us</p>
    <p className="text-blk subHeading">

    Welcome to Pullo, where we bring you the perfect blend of style, quality, and convenience in footwear. Our carefully curated collection offers shoes for every occasion, from classic designs to the latest trends. Whether you need casual sneakers, formal shoes, or durable outdoor footwear, we’ve got you covered.

At Pullo, quality is our priority. We source shoes from trusted brands known for their superior craftsmanship and attention to detail. We are also committed to sustainability by offering eco-friendly options, allowing you to make a positive impact while looking great.

Our user-friendly online store is designed to make your shopping experience smooth and enjoyable, with detailed product information, size guides, and customer reviews to help you find the perfect pair. We provide fast, reliable shipping and hassle-free returns, ensuring you can shop confidently from the comfort of your home.

Customer satisfaction is at the heart of everything we do. Our dedicated support team is here to assist you every step of the way, ensuring you have a seamless and enjoyable experience.

Step into style and comfort with Pullo —your go-to destination for high-quality, fashionable footwear.

    </p>
    <div className="social-icons-container">
      <a className="social-icon">
        <img
          className="socialIcon image-block"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
        />
      </a>
      <a className="social-icon">
        <img
          className="socialIcon image-block"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
        />
      </a>
      <a className="social-icon">
        <img
          className="socialIcon image-block"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
        />
      </a>
      <a className="social-icon">
        <img
          className="socialIcon image-block"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
        />
      </a>
    </div>
  </div>
</div>


  )
}

export default AboutUs