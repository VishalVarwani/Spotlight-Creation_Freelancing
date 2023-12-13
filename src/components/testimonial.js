

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../css/testimonial.css"
import 'swiper/css/autoplay'


import { EffectCoverflow, Pagination, Navigation ,Autoplay} from 'swiper/modules';


import rightquote from '../assets/rightquote.png'
function Testimonial() {
  return (
    <div style={{marginBottom:100}}className="container">
  <div className="sec-title">
  <h3 style={{
      position: 'relative',
      display: 'inline-block',
      fontSize: '4.5em',
      paddingBottom: '0.5em'
    }} className='headingtesti'>
      Happy Client Works
      <span style={{
        content: '',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#3498db', // Change the color to your preference
        transform: 'scaleX(0)',
        transformOrigin: 'bottom right',
        transition: 'transform 0.3s ease-in-out'
      }}></span>
    </h3>
              </div>      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true

        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide className='swiper-slide'>
          <div className='testimonailBox'>
          <img  className='quote' src={rightquote} alt="slide_image" />
           <div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div className='details'>
<div className='imgBx'>
        <img src='https://www.singaporebusinesscentre.com.sg/wp-content/uploads/2016/12/singapore-business-centre-team-placeholder-t2.png'/>
  </div>
  <h3>Someone Famous <br/> <span>Creative Designer</span></h3>
</div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='testimonailBox'>
          <img className='quote' src={rightquote} alt="slide_image" />
           <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div className='details'>
<div className='imgBx'>
  <img src='https://www.singaporebusinesscentre.com.sg/wp-content/uploads/2016/12/singapore-business-centre-team-placeholder-t2.png'/>

  </div>
  <h3>Someone Famous <br/> <span>Creative Designer</span></h3>
</div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='testimonailBox'>
          <img className='quote' src={rightquote} alt="slide_image" />
           <div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div className='details'>
<div className='imgBx'>
  <img src='https://www.singaporebusinesscentre.com.sg/wp-content/uploads/2016/12/singapore-business-centre-team-placeholder-t2.png'/>

  </div>
  <h3>Someone Famous <br/> <span>Creative Designer</span></h3>
</div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='testimonailBox'>
          <img className='quote' src={rightquote} alt="slide_image" />
           <div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div className='details'>
  <div className='imgBx'>
  <img src='https://www.singaporebusinesscentre.com.sg/wp-content/uploads/2016/12/singapore-business-centre-team-placeholder-t2.png'/>

  </div>
  <h3>Someone Famous <br/> <span>Creative Designer</span></h3>
</div>
          </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          </div>
          <div className="swiper-button-next slider-arrow">
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonial;
