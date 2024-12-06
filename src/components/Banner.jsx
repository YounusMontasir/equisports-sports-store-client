import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'animate.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Bounce, Fade, Flip } from "react-awesome-reveal";

const Banner = () => {


  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full h-screen"
    >

      <SwiperSlide className="relative bg-[url('https://i.ibb.co/NFMj37K/fbg1.jpg')] bg-cover bg-center min-h-screen">
  <div className="absolute top-60 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
   
   <Bounce cascade="true"> 
   <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Explore Our World</h1>
    <p className="text-xl max-w-xl ">
      Immerse yourself in a journey of discovery and innovation.
    </p>
    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
   </Bounce>
   
  </div>
</SwiperSlide>
<SwiperSlide className="relative bg-[url('https://i.ibb.co.com/Bqws043/bgf5.jpg')] bg-cover bg-center min-h-screen">
  <div className="absolute top-60 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
    <Bounce cascade="true">
    <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Explore Our World</h1>
    <p className="text-xl max-w-xl">
      Immerse yourself in a journey of discovery and innovation.
    </p>
    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
    </Bounce>
  </div>
</SwiperSlide>
<SwiperSlide className="relative bg-[url('https://i.ibb.co.com/yY2yH1L/bgf3.jpg')] bg-cover bg-center min-h-screen">
  <div className="absolute top-60 right-8 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
   <Bounce cascade="true">
   <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Explore Our World</h1>
    <p className="text-xl max-w-xl">
      Immerse yourself in a journey of discovery and innovation.
    </p>
    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
   </Bounce>
  </div>
</SwiperSlide>
      
    </Swiper>
  );
};

export default Banner;
