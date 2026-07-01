import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Patil",
      college: "PCCOE Pune",
      review:
        "EngiWorld made my semester preparation much easier. Notes and PYQs are available in one place.",
    },
    {
      name: "Sneha Sharma",
      college: "MIT-WPU",
      review:
        "I found internship opportunities and placement resources without searching different websites.",
    },
    {
      name: "Aditya Joshi",
      college: "VIT Pune",
      review:
        "The UI is clean and the department-wise resources save a lot of time.",
    },
    {
      name: "Priya Deshmukh",
      college: "COEP",
      review:
        "A perfect platform for engineering students. Everything is organized beautifully.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF5F5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-16">

          <div className="flex items-center gap-4 mb-6">

            <div className="flex-1 h-px bg-gray-300"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] text-center">
              What Students Say
            </h2>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          <p className="text-center text-lg text-gray-500">
            Thousands of engineering students trust EngiWorld.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((student, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 h-full">

                {/* Quote Icon */}

                <FaQuoteLeft className="text-4xl text-[#FF6B6B] mb-6" />

                {/* Review */}

                <p className="text-gray-600 leading-8 italic">
                  "{student.review}"
                </p>

                {/* Rating */}

                <div className="flex gap-1 text-yellow-400 mt-6">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* Student */}

                <div className="mt-8 flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center text-xl font-bold shadow-md">

                    {student.name.charAt(0)}

                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">
                      {student.name}
                    </h3>

                    <p className="text-gray-500">
                      {student.college}
                    </p>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;