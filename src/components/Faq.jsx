import React from 'react';

const Faq = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 w-11/12 items-center  lg:w-10/12 mx-auto mb-20 mt-16'>
            <img className='w-full lg:w-1/2' src="https://i.ibb.co.com/b51nJWz/faqq.png" alt="" />
            <div className='w-full space-y-3'>
            <div class="collapse collapse-arrow bg-base-200  ">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-2xl text-[#7ABB2D] font-bold">How can I list my sports equipment for sale on EquiSports?</div>
  <div class="collapse-content">
    <p>To list your equipment, simply create an account or log in, navigate to the "My Equipment" section, and add your product details, including descriptions and images.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl text-[#7ABB2D] font-bold">What is the "All Equipment" section?</div>
  <div class="collapse-content">
    <p>The "All Equipment" section showcases all available sports products listed by users. Each product includes detailed descriptions to help you make informed decisions.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl text-[#7ABB2D] font-bold">Can I trust the brands featured on EquiSports?</div>
  <div class="collapse-content">
    <p>Yes, we highlight trusted brands recognized for their quality and reliability, ensuring you have access to high-standard products.
    </p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl text-[#7ABB2D] font-bold">Can I manage or edit my listed products after posting?</div>
  <div class="collapse-content">
    <p>Yes, you can view, edit, or remove your listed products anytime through the "My Equipment" section in your account.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faq;

