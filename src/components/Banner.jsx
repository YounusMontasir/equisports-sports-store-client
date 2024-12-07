import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'animate.css';

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
  <div className="absolute top-60 left-8 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
   
   <Bounce cascade="true"> 
   <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Gear Up for Every Game!</h1>
    <p className="text-xl max-w-xl text-white ">
    Discover premium sports equipment for champions. Gear up for every challenge!
    </p>
    <button className="bg-[#7ABB2D] text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
   </Bounce>
   
  </div>
</SwiperSlide>
<SwiperSlide className="relative bg-[url('https://i.ibb.co.com/Bqws043/bgf5.jpg')] bg-cover bg-center min-h-screen">
  <div className="absolute top-60 right-8 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
    <Bounce cascade="true">
    <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Unleash Your <br /> Athletic Potential!</h1>
    <p className="text-xl max-w-xl text-white">
    Your one-stop shop for high-performance gear. Play harder, perform better!
    </p>
    <button className="bg-[#7ABB2D] text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
    </Bounce>
  </div>
</SwiperSlide>
<SwiperSlide className="relative bg-[url('https://i.ibb.co.com/yY2yH1L/bgf3.jpg')] bg-cover bg-center min-h-screen">
  <div className="absolute top-60 right-8 flex flex-col justify-center items-start text-left p-10 text-[#7ABB2D] space-y-4">
   <Bounce cascade="true">
   <h1 className="text-5xl md:text-6xl font-bold animate__animated animate__backInDown">Top-Quality Gear,<br /> Unmatched Performance!</h1>
    <p className="text-xl max-w-xl text-white">
    Upgrade your game with the latest sports equipment designed for excellence.
    </p>
    <button className="bg-[#7ABB2D] text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
      Get Started
    </button>
   </Bounce>
  </div>
</SwiperSlide>
      
    </Swiper>
  );
};

export default Banner;
