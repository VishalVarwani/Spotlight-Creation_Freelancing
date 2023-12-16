    import React ,{useState, useEffect}from 'react'
    import "../css/style.css"
    import "../css/testimonial.css"
    import "../css/demo.css"
    import "../css/css.css"
    import about from "../assets/about.jpg"
    import "../css/lightbox.css"

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
    <div style={{top:80}}>
    {/* Navigation */}
    <div  style={{top:80}} id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval={5000}>
  <div className="carousel-inner">
    <div className="carousel-item active zoom-in">
      <img style={{height:800}}src="https://images.pexels.com/photos/458810/pexels-photo-458810.png?cs=srgb&dl=pexels-pixabay-458810.jpg&fm=jpg" className="d-block w-100" alt="Slide 1" />
    
      <div className="overlay" />
      {/* <div  style={{left:0}} className="carousel-caption fade-in blur">
        <h2  style={{display:"flex", justifyContent:"flex-end"}}>Welcome to Our Photography Collection</h2>
        <p  style={{display:"flex", justifyContent:"flex-end"}}>Your captivating journey begins here.</p>
        <a  style={{left:0, marginLeft:1000, justifyContent:"flex-end"}} href="#" className="hover-effect-new"><span>Learn More</span></a>

      </div> */}
    </div>
    <div className="carousel-item zoom-in">
      <img style={{height:800}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="d-block w-100" alt="Slide 2" />
      <div className="overlay" />
      {/* <div className="carousel-caption fade-in blur">
        <h2>Explore Captivating Moments</h2>
        <p>Discover the artistry of visual storytelling.</p>
      </div> */}
    </div>
    {/* Add more slides as needed */}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

</div>
    
    )}
 
         <div id="about" className="section wb">
  <div style={{margin:40}}className="">
    <div className="row">
      <div className="col-md-5">
        <div className="message-box">                        
          <h2>Welcome to Spotlight Creation– Where Vision Comes to Life!
</h2>
          <p style={{marginTop:10}}> At Spotlight Creation, we are not just creators; we are storytellers, capturing moments and transforming them into unforgettable experiences. Established with a passion for visual excellence, our journey is fueled by the belief that every project deserves its unique spotlight.
</p>
          <p>Spotlight Creation is more than a name; it's a promise. We specialize in bringing ideas to life through a lens, whether it's the pulsating rhythm of a music video, the vibrant allure of a product shoot, or the timeless elegance of a wedding ceremony. Our vision is to be the creative force that transforms concepts into captivating visual narratives.
</p>
          <a href="#" className="hover-effect-new"><span>Learn More</span></a>
        </div>{/* end messagebox */}
      </div>{/* end col */}
      <div className="col-md-7">
  <div className="">
    <img src={about} alt="" className="" />
  </div>
</div>{/* end col */}
    </div>{/* end row */}
  </div>{/* end container */}
</div>{/* end section */}
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
                      <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
        < a href='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'className='anchor' data-lightbox="models" >
    <img src={item.imageUrl}/> </a>
</a>
        
        </article>
                      <div className="box-content">
                        <div className="inner-content">
                          <h3 className="title">{item.title}</h3>
                          <span className="post">{item.post}</span>
                        </div>
                        <ul className="icon">
                          <li>      <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
        < a href={item.imageUrl}className='anchor' data-lightbox="models" >
        <FontAwesomeIcon icon={faMagnifyingGlass}  />
</a>
</a>
        
        </article></li>

                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className="well well__ins1 center">
 
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
