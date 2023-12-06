import React from 'react'
import "../css/testimonial.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import 'animate.css';
export default function Testimonial() {
  return (
    <div>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" rel="stylesheet" />
      <section className="testimonial-section">
        <div className="large-container">
          <div className="sec-title">
            <span className="title">Testimonial</span>
            <h2>What Our core client say ?</h2>
          </div>

          <OwlCarousel
            className="testimonial-carousel owl-theme"
            loop
            margin={10}
            nav
            dots={false}
            autoplay
            autoplayTimeout={8000}
            autoplayHoverPause
            animateOut="slideOutUp"
            animateIn="slideInDown"
            
            responsive={{
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 1
              }
            }}
          >
            {/* Testimonial blocks go here */}
            <div className="testimonial-block animate__animated animate__fadeInDown">
              <div className="inner-box">
                <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team</div>
                <div className="info-box">
                  <div className="thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block animate__animated animate__fadeInDown">
              <div className="inner-box">
              <div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
					<div class="info-box">
						<div class="thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/></div>
						<h4 class="name">Mahfuz Riad</h4>
						<span class="designation">Ui Designer & CEO</span>
					</div>
              </div>
            </div>
            <div className="testimonial-block animate__animated animate__fadeInDown">
              <div className="inner-box">
              <div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
                <div className="info-box">
                <div class="thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/></div>
						<h4 class="name">Mahfuz Riad</h4>
						<span class="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>

            {/* Add more testimonial blocks as needed */}

          </OwlCarousel>
        </div>
      </section>
    </div>
  )
}
