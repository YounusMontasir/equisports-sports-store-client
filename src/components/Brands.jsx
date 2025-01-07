import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Brands = () => {
    return (
        <div id='brand' className='mb-24'>
            <Swiper
            modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={6}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                
            >
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/0j6dJVy/cric1.png"
                        alt="Cricket"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/bHW92ck/web-183282273.jpg"
                        alt="Football"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center w-full items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/K2SqJcW/volley1.png"
                        alt="Volleyball"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/3pfMPZ9/360-F-449705784-NPLHW4-Ne-Hn-VZc8d8-OKm-S3hd-Hd-GS1mb7s.jpg"
                        alt="General Sports"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center '>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/PgsZfsr/images-q-tbn-ANd9-Gc-Q2-Nt8-SAhi78xr-Ih-Ic-G3w-UWJBst8-MXBse-MA-s.png"
                        alt="Basketball"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/hFcRrg4/jakarta-indonesia-july-8-2023-600nw-2328526217.jpg"
                        alt="Badminton"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/FmHJ6nb/gilbert.png"
                        alt="Rugby"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/PNxW2Ft/molten.jpg"
                        alt="Hockey"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img
                        className="object-contain h-48 w-full"
                        src="https://i.ibb.co.com/5KMjxXF/images-q-tbn-ANd9-Gc-S3-Or-Kr2c-BQc7h-I9-Oz-Us-S8u-HAQNK8-QEek-JV-g-s.png"
                        alt="Hockey"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brands;
