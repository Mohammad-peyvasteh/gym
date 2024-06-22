"use client";
//import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeiIn } from "@/lib/variants";
function HeroSlider() {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full  flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeiIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-access"> HARD WORK</span> MEETS SUCCESS
            </motion.h1>

            <motion.p
            variants={fadeiIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
             className="text-white italic text-center lg:text-left mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              eius maxime iusto.
            </motion.p>
            <motion.div
            variants={fadeiIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            >
            <CustomButton

              text="Get started"
              containerStyles="w-[196px] h-[62px] "
            />

            </motion.div>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full  flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeiIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-access"> HARD WORK</span> MEETS SUCCESS
            </motion.h1>

            <motion.p
            variants={fadeiIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
             className="text-white italic text-center lg:text-left mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              eius maxime iusto.
            </motion.p>
            <motion.div
            variants={fadeiIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            >
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] "
            />

            </motion.div>
            
          </div>
        </div>
      </SwiperSlide>
     
      {/*swiper nav buttons */}
      
    </Swiper>
  );
}

export default HeroSlider;
