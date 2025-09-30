import React, { useRef, useState } from 'react'
import { images, laptops1, laptops2, laptops3, gadgets, mobilePhones, accessories, ledsAndTVs } from './constants/index.js'
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";
import { gsap } from 'gsap';

// Manual Scrolling Slider Component
const ManualSlider = ({ title, data, seeMoreLink }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <a href={seeMoreLink} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            See more
          </a>
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 pb-4"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            {data.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-3">
                <a href={item.url || item.a} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-square mb-3">
                    <img 
                      src={item.src} 
                      alt={item.alt || item.name} 
                      className="w-full h-full object-contain rounded hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  {item.name && (
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                      {item.discount && (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {item.discount}
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        {item.price && <span className="text-lg font-bold text-gray-900">{item.price}</span>}
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200 z-10"
          >
            <SlArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200 z-10"
          >
            <SlArrowRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    gsap.to(sliderRef.current, { x: `-${nextIndex * 100}vw`, duration: 0.5, ease: "power2.out" });
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    gsap.to(sliderRef.current, { x: `-${prevIndex * 100}vw`, duration: 0.5, ease: "power2.out" });
  };

  return (<>
    {/* Hero Section */}
    <div className="hero w-full h-auto relative overflow-hidden">
      <ul ref={sliderRef} className='slider flex flex-row transition-transform duration-500 ease-out'>
          {images.map((image) => (
              <li key={image.id} className='w-screen h-auto flex-shrink-0'>
                  <a href={image.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={image.src} alt={image.alt} className='w-full h-auto object-cover hover:opacity-95 transition-opacity duration-200'/>
                  </a>
              </li>
          ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-white"></div>
      <SlArrowLeft 
        onClick={handlePrev} 
        className='h-15 w-15 absolute z-10 left-4 top-1/4 transform -translate-y-1/2 cursor-pointer text-black hover:text-grey-500 transition-colors duration-200 rounded-full p-2' 
      />
      <SlArrowRight 
        onClick={handleNext} 
        className='h-15 w-15 absolute z-10 right-4 top-1/4 transform -translate-y-1/2 cursor-pointer text-black hover:text-grey-500 transition-colors duration-200 rounded-full p-2' 
      />
    </div>

    {/* Laptop Sections */}
    <div className="absolute top-90 laptop-sections w-full py-8 px-4 bg-transparent z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* First Laptop Section */}
        <div className="laptop-section bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Deals you might like</h3>
          <div className="grid grid-cols-2 gap-3">
            {laptops1.map((laptop) => (
              <div key={laptop.id} className="laptop-item">
                <a href={laptop.a} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={laptop.src} 
                    alt={laptop.alt} 
                    className="w-full h-24 object-contain rounded hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-4 block">See all deals</a>
        </div>

        {/* Second Laptop Section */}
        <div className="laptop-section bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Computers & Accessories</h3>
          <div className="grid grid-cols-2 gap-3">
            {laptops2.map((laptop) => (
              <div key={laptop.id} className="laptop-item">
                <a href={laptop.a} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={laptop.src} 
                    alt={laptop.alt} 
                    className="w-full h-24 object-contain rounded hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-4 block">See all deals</a>
        </div>

        {/* Third Laptop Section */}
        <div className="laptop-section bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Deals inspired by your recent history</h3>
          <div className="grid grid-cols-2 gap-3">
            {laptops3.map((laptop) => (
              <div key={laptop.id} className="laptop-item">
                <a href={laptop.a} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={laptop.src} 
                    alt={laptop.alt} 
                    className="w-full h-24 object-contain rounded hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-4 block">See all deals</a>
        </div>

        {/* Fourth Empty Section */}
        <div className="laptop-section bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Sign in for your best experience</h3>
          <div className="flex flex-col items-center justify-center h-32">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded transition-colors duration-200">
              Sign in securely
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">New customer? Start here.</a>
          </div>
        </div>

      </div>
    </div>

    {/* Manual Scrolling Product Sliders */}
    <div className="bg-gray-50 relative top-10 space-y-1">
      {/* Gadgets & Electronics Slider */}
      <ManualSlider 
        title="Up to 70% off | Power up with the latest gadgets from stores nearby" 
        data={gadgets} 
        seeMoreLink="#"
      />

      {/* Mobile Phones Slider */}
      <ManualSlider 
        title="Up to 40% off | Best Deals on flagship smartphones" 
        data={mobilePhones} 
        seeMoreLink="#"
      />

      {/* Accessories Slider */}
      <ManualSlider 
        title="Premium Accessories | Apple & Tech Accessories" 
        data={accessories} 
        seeMoreLink="#"
      />

      {/* LEDs & Smart TVs Slider */}
      <ManualSlider 
        title="Up to 65% off | Deals on Smart TVs" 
        data={ledsAndTVs} 
        seeMoreLink="#"
      />
    </div>
  </>)
}
export default Hero;