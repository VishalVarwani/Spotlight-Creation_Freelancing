import React from 'react'
import "../css/services.css"
import {faMagnifyingGlass,faRing,faPhotoFilm, faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
  return (
    <div>
           <section className="section section-services">
  <div className="container">
  <h3 style={{
      position: 'relative',
      fontSize: '4.5em',
    }} className='common-heading'>
     Services Offers
      <span style={{
        content: '',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        transform: 'scaleX(0)',
        transformOrigin: 'bottom right',
        transition: 'transform 0.3s ease-in-out'
      }}></span>
    </h3>
    <p style={{alignItems:"baseline", display:"flex"}}>
    Explore Our Exceptional Services for Unparalleled Excellence

    </p>
  </div>
  {/* services offers card  */}
  <div id="services" className="section lb">
  <div className="container">
   
    <div className="row">
      <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faRing} size='2xl'/>

                                  </div>
            <h2>Music Videos & Film Production</h2>
            <p>Welcome to the heart of our creative realm at Spotlight Creation, where we specialize in crafting cinematic wonders through our Music Videos & Film Production services. </p>
          </div>
        </div>
      </div>{/* end col */}
      <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faPhotoFilm} size='2xl' />
                                    </div>
            <h2>TVC</h2>
            <p>At Spotlight Creation, our TVC services are designed to transform your brand into a captivating visual <br/> story that resonates with your audience.</p>
          </div>
        </div>
      </div>{/* end col */}
      <div className="col-md-4">
        <a href=''>
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faCakeCandles} size='2xl' color='black' />
                        </div>
            <h2>Product Shoot</h2>
            <p style={{color:"black"}}>Our team of seasoned photographers understands the art  <br/>and science behind creating visually compelling images.</p>
          </div>
        </div>

        </a>
        
      </div>
      <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faPhotoFilm} size='2xl' />
                                    </div>
            <h2>TVC</h2>
            <p>At Spotlight Creation, our TVC services are designed to transform your brand into a captivating visual story that resonates with your audience.</p>
          </div>
        </div>
      </div>{/* end col */}
      <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faPhotoFilm} size='2xl' />
                                    </div>
            <h2>TVC</h2>
            <p>At Spotlight Creation, our TVC services are designed to transform your brand into a captivating visual story that resonates with your audience.</p>
          </div>
        </div>
      </div>{/* end col */}  <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faPhotoFilm} size='2xl' />
                                    </div>
            <h2>TVC</h2>
            <p>At Spotlight Creation, our TVC services are designed to transform your brand into a captivating visual story that resonates with your audience.</p>
          </div>
        </div>
      </div>{/* end col */}  <div className="col-md-4">
        <div className="effect-new">
          <div className="services-inner-box">
            <div className="ser-icon">
            <FontAwesomeIcon icon={faPhotoFilm} size='2xl' />
                                    </div>
            <h2>TVC</h2>
            <p>At Spotlight Creation, our TVC services are designed to transform your brand into a captivating visual story that resonates with your audience.</p>
          </div>
        </div>
      </div>{/* end col */}
      {/* end col */}
    </div>
    {/* end row */}
  </div>{/* end container */}
</div>{/* end section */}
</section>
    </div>
  )
}
