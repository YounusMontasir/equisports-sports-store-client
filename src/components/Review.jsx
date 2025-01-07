import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";


const Review = () => {
  return (
    <div id="review" className="swiper-container mb-24">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        effect={"coverflow"} 
        grabCursor={true} 
        centeredSlides={true} 
        loop={true} 
        coverflowEffect={{
          rotate: 50, 
          stretch: 0, 
          depth: 100, 
          modifier: 1, 
        }}
        breakpoints={{
          320: {
            slidesPerView: 1, 
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2, 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 50,
          },
        }}
        modules={[EffectCoverflow]} 
       
      >
        <SwiperSlide>
          <div className="bg-gray-500">
          <div className="pt-10">
          <img
              src="https://i.ibb.co/PM2dtYS/man1.jpg"
              alt="Review 1"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
          </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
              </div>
              <h1 className="text-white mt-6 pb-10 md:w-9/12">
                "I recently bought a new basketball from this store, and I'm so
                impressed with the quality! The grip is perfect, and it has a
                great bounce. I play in a local league, and this ball has
                definitely improved my game. Shipping was fast, and customer
                service was excellent!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500">
          <div className="pt-10">
          <img
              src="https://i.ibb.co.com/xm5p1by/w2.jpg"
              alt="Review 1"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
          </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
              </div>
              <h1 className="text-white mt-6 pb-10 md:w-9/12">
              "I bought a pair of football shoes from this site, and I couldn’t be more pleased. The fit is perfect, and they are incredibly comfortable. Whether I’m on the field for practice or playing a game, they give me great traction and support. Excellent value for the price!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500">
          <div className="pt-10">
          <img
              src="https://i.ibb.co.com/HN2kMhz/woman1.jpg"
              alt="Review 1"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
          </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
              </div>
              <h1 className="text-white mt-6 pb-10 md:w-9/12">
              "I’m so happy with my new badminton racket from [Store Name]! The frame is durable, and it provides excellent control and power. I’m a regular player, and this racket has made a noticeable difference in my game. Would definitely purchase again!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500">
          <div className="pt-10">
          <img
              src="https://i.ibb.co.com/Wtdxt30/man-4.jpg"
              alt="Review 1"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
          </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400" checked="checked"
                />
              </div>
              <h1 className="text-white mt-6 pb-10 md:w-9/12">
              "As an avid cricket player, I've tried many bats, but this one from [Brand Name] is by far the best. It’s lightweight, well-balanced, and delivers an amazing punch when hitting the ball. I’ve noticed an improvement in my performance right away. Highly recommend it!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>
    </div>
  );
};

export default Review;
