"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeiIn } from "@/lib/variants";
import Achievenments from "./Achievenments";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam enim velit veritatis deleniti quae. Harum consequuntur voluptatem fugit adipisci magnam!",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam enim velit veritatis deleniti quae. Harum consequuntur voluptatem fugit adipisci magnam!",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam enim velit veritatis deleniti quae. Harum consequuntur voluptatem fugit adipisci magnam!",
  },
];

function About() {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            className="h2 text-center"
            variants={fadeiIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeiIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
            dignissimos assumenda veritatis, quidem itaque?
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
        variants={fadeiIn('up',0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
         className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featured.map((featured, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-4 items-center border p-10"
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full  flex justify-center items-center">
                  {featured.icon}
                </div>
                <div className="flex flex-col  justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-access">{featured.title}</h4>
                  <p>{featured.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievenments */}
        <motion.div
        variants={fadeiIn('up',1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        >
        <Achievenments />
        </motion.div>
      
      </div>
    </section>
  );
}

export default About;
