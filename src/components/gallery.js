import React, {useState,useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {faMagnifyingGlass,faRing,faPhotoFilm, faCakeCandles, faGhost, faMugHot, faKey} from "@fortawesome/free-solid-svg-icons"
export default function Gallery() {
    const [isLoading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('*');
    const [currentSlide, setCurrentSlide] = useState(0);
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
  return (
    <div>
         <div className="sec-title">
  <h3 style={{
      position: 'relative',
      display: 'inline-block',
      fontSize: '4.5em',
      paddingBottom: '0.5em',
      marginTop:100
    }} className='headinggallery'>
     Our Awesome Projects
     
    </h3>
    <h4 style={{color:"GrayText"}}>Our gallery is a testament to the extraordinary stories that unfold in the ordinary moments of life. Each photograph is a canvas of emotions, a snapshot of unique perspectives, and a celebration of the magic found in the everyday. </h4>
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

  )
}
