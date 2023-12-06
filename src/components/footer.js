import React from 'react'
import "../css/style.css"


export default function Footer() {
  return (
    <div>
  <footer className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3 img-logo">
          <div className='navbar_brand'>
        <a href="index.html"><div style={{marginTop:-10}} className="logo"></div></a>
    </div>
            <p>Spotlight Creation is more than a name; it's a promise. Our vision is to be the creative force that transforms concepts into captivating visual narratives.
</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h4 className="mb-4 ph-fonts-style foot-title">
            RECENT NEWS
          </h4>
          <p className="ph-links-column">
            <a href="#" className="text-black">About us</a>
            <a href="#" className="text-black">Services</a>
            <a href="#" className="text-black">Our Portfolio</a>
            <a href="#" className="text-black">Get In Touch</a>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h4 className="mb-4 ph-fonts-style foot-title">
            Our Services
          </h4>
          <p className="ph-links-column">
            <a href="#" className="text-black">Garment shoot</a>
            <a href="#" className="text-black">Social Media</a>
            <a href="#" className="text-black">Model Portfolio</a>
            <a href="#" className="text-black">Product Shoot</a>
            <a href="#" className="text-black">TVC</a>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h4 className="mb-4 ph-fonts-style foot-title">
            Drop your email if you need any help
          </h4>
        
          <div className="media-container-column" data-form-type="formoid">
            <div data-form-alert className="align-center" hidden>
              Thanks for filling out the form!
            </div>
            <form className="form-inline" action="#" method="post">
              <input defaultValue data-form-email="true" type="hidden" />
              <div className="form-group">
                <input className="form-control input-sm input-inverse my-2" name="email" required data-form-field="Email" placeholder="Email" id="email" type="email" />
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="copyrights">
    <div className="container">
      <div className="footer-distributed">
        <div className="footer-left">                    
          <p className="footer-company-name">All Rights Reserved. © 2023 Design by : 
            <a href="https://html.design/"></a> <a href="">Spotlight Creation</a>
          </p>
        </div>
      </div>
    </div>{/* end container */}
  </div>{/* end copyrights */}
</div>



  )
}
