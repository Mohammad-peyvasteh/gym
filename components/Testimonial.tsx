"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeiIn } from "@/lib/variants";
//data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Maria Garcia",
  },
];

function Testimonial() {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container">
        <motion.h2
        className="h2 text-center"
          variants={fadeiIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeiIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            className="h-[320px]"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full ">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className=" rounded-full border-2 border-access"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.massage}</p>
                      <span className="text-2xl text-access">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
