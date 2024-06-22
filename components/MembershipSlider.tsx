"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import CustomButton from "./CustomButton";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//data
const membershipData = [
  {
    title: "Standard",
    price: "30",
    benesfits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benesfits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benesfits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenities",
      },
    ],
  },
];

function MembershipSlider() {
  return (
    <Swiper
      slidesPerView={1}
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
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="border border-access hover:bg-primary-300/80 transition-all duration-300 max-w-sm xl:max-w-none mx-auto">
          <div className="py-5  px-[60px] border-b border-access">
            <h4 className="h4">
              {item.title}
            </h4>
          </div>
         {/*benefits */}
         <div className="py-[30px] px-[60px]">
          <ul className="flex flex-col gap-5 mb-5">
            {item.benesfits.map((item,index)=>{
              return(
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="text-access text-lg"/>
                  {item.text}
                  </li>
              )
            })}
          </ul>
          {/*price */}
          <p className="text-access mb-4 flex gap-1 items-center">
            <sup className="text-4xl">
              $
            </sup>
            <strong className="text-6xl">
              {item.price}
            </strong>
            <em className=" self-end text-2xl">/month</em>
          </p>
          <CustomButton text="Buy now" containerStyles="w-[190px] h-[55px]"/>
         </div>
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
}

export default MembershipSlider;
