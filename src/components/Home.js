    import React ,{useState, useEffect}from 'react'
    import "../css/style.css"
    import "../css/testimonial.css"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {faMagnifyingGlass,faRing,faPhotoFilm, faCakeCandles, faGhost, faMugHot, faKey} from "@fortawesome/free-solid-svg-icons"
    import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './testimonial'
import Footer from './footer'
import { Link } from 'react-router-dom'
import Header from './header'



    export default function Home() {
        const [isLoading, setLoading] = useState(true);
        const [activeCategory, setActiveCategory] = useState('*');
        const [currentSlide, setCurrentSlide] = useState(0);


        useEffect(() => {
          // Simulate a delay (you can replace this with actual data loading)
          const loadingTimeout = setTimeout(() => {
            setLoading(false); // Set loading to false after the delay
          }, 2000);
      
          // Clear the timeout to prevent memory leaks
          return () => clearTimeout(loadingTimeout);
        }, []);
      
        const handleCategoryChange = (category) => {
          setActiveCategory(category);
        };
      
        const galleryItems = [
          // Define your gallery items here
          { category: 'photo_a', imageUrl: 'https://plus.unsplash.com/premium_photo-1674065309449-574be96378fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Wedding 1', post: 'Latest Photo' },
          { category: 'photo_b', imageUrl: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Model 1', post: 'Latest Photo' },
          { category: 'photo_c', imageUrl: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Fashion 1', post: 'Latest Photo' },
          { category: 'photo_a', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Wedding 2', post: 'Latest Photo' },
          { category: 'photo_b', imageUrl: 'https://images.unsplash.com/photo-1597861405049-0b011428568f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Model 2', post: 'Latest Photo' },
          { category: 'photo_c', imageUrl: 'https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Fashion 2', post: 'Latest Photo' },   
          { category: 'photo_c', imageUrl: 'https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Fashion 2', post: 'Latest Photo' },   
          { imageUrl: 'https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slide 1', post: 'Description 1' },
          { imageUrl: 'https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slide 2', post: 'Description 2' },     ];
       
          const filteredItems = activeCategory === '*' ?
            galleryItems :
            galleryItems.filter(item => item.category === activeCategory);
            useEffect(() => {
    // Auto-advance the slider every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryItems.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryItems.length);
  };
    return (
        <div>
        {/* LOADER */}
        {isLoading ? (
                // Loader
                <div id="preloader">
                    <div className="loader-rd" />
                    <div className="loader-rd" />
                    <div className="loader-rd" />
                    <div className="loader-rd" />
                </div>
            ) : (
    <div>
    {/* Navigation */}
<div style= {{top:80}}id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{}}className="d-block w-100" src="https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg" alt="First slide" />
    </div>
  </div>
  <a style={{ top:300}} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a style={{  top:300}}className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


	
    </div>
    
    )}
 
         <div id="about" className="section wb">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="message-box">                        
          <h3>Welcome to Spotlight Creation– Where Vision Comes to Life!
</h3>
          <p> At Spotlight Creation, we are not just creators; we are storytellers, capturing moments and transforming them into unforgettable experiences. Established with a passion for visual excellence, our journey is fueled by the belief that every project deserves its unique spotlight.
</p>
          <p>Spotlight Creation is more than a name; it's a promise. We specialize in bringing ideas to life through a lens, whether it's the pulsating rhythm of a music video, the vibrant allure of a product shoot, or the timeless elegance of a wedding ceremony. Our vision is to be the creative force that transforms concepts into captivating visual narratives.
</p>
          <a href="#" className="hover-effect-new"><span>Learn More</span></a>
        </div>{/* end messagebox */}
      </div>{/* end col */}
      <div className="col-md-6 aboutimage">
  <div className="right-box-pro wow fadeIn">
    <img src="/public/assets" alt="" className="img-fluid img-rounded" />
  </div>
</div>{/* end col */}
    </div>{/* end row */}
  </div>{/* end container */}
</div>{/* end section */}

    {/* END LOADER */}
   {/* Gallery Section */}
          <div id="gallery" className="section lb">
            <div className="container">
              <div className="section-title text-center">
                <h3>Gallery</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
              </div>

              {/* Filter Buttons */}
              <div className="gallery-menu text-center row">
                <div className="col-md-12">
                  <div className="button-group filter-button-group">
                    <button className={activeCategory === '*' ? 'active' : ''} onClick={() => handleCategoryChange('*')}>All</button>
                    <button className={activeCategory === 'photo_a' ? 'active' : ''} onClick={() => handleCategoryChange('photo_a')}>Wedding</button>
                    <button className={activeCategory === 'photo_b' ? 'active' : ''} onClick={() => handleCategoryChange('photo_b')}>Models</button>
                    <button className={activeCategory === 'photo_c' ? 'active' : ''} onClick={() => handleCategoryChange('photo_c')}>Fashion</button>
                  </div>
                </div>
              </div>

              {/* Gallery Items */}
              <div className="gallery-list row">
                {filteredItems.map((item, index) => (
                  <div key={index} className="col-md-4 col-sm-6 gallery-grid">
                    <div className="gallery-single fix">
                      <img src={item.imageUrl} className="img-fluid" alt="Image" />
                      <div className="box-content">
                        <div className="inner-content">
                          <h3 className="title">{item.title}</h3>
                          <span className="post">{item.post}</span>
                        </div>
                        <ul className="icon">
                          <li><a href={item.imageUrl} data-rel="prettyPhoto[gal]">        
                              <FontAwesomeIcon icon={faMagnifyingGlass}  />
                              </a></li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className="well well__ins1 center">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <FontAwesomeIcon className="flaticon-toilets1" icon={faGhost}  size='2xl' color='black' />
        <hr />
        <h3>WE ARE CREATIVE</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
      <div className="col-md-4">
      <FontAwesomeIcon className="flaticon-toilets1" icon={faMugHot} size='2xl' color='black' />
        <hr />
        <h3>WE ARE MODERN</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
      <div className="col-md-4">
      <FontAwesomeIcon className="flaticon-toilets1" icon={faKey} size='2xl' color='black' />
        <hr />
        <h3>WE ARE EXPERTS</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
    </div>
  </div>
</section>
        <div id="services" className="section lb">
  <div className="container">
    <div className="section-title text-center">
      <h3>Services</h3>
      <p>Empowering success through personalized and efficient services.</p>
    </div>{/* end title */}
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
        <a style={{textDecoration:"none"}}href=''>
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
      </div>{/* end col */}
    </div>{/* end row */}
    <Link style={{color:"black"}}to="Services" className="hover-effect-new"><span>Explore More</span></Link>
  </div>{/* end container */}
</div>{/* end section */}
{/* testimonial start */}
<Testimonial/>
{/* testimonial end */}
<section className="section-md bg-accent bg-image text-center bg-overlay-darker" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.webp?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=)', backgroundPosition: 'center 50%'}}>
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-11 col-lg-9 col-xl-8"> 
        <h3 style={{color:"#fff", fontSize:46, lineHeight: 1.17391, fontWeight: 800}} className="heading-decorated">Haven’t Found What You Like? Feel free to get in touch</h3><a className="button button-primary" href="contacts.html">Contact Us</a>
      </div>
    </div>
  </div>
</section>
{/* footer start */}
<Footer/>
{/* footer end */}
        </div>
   
    )
    }
