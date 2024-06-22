"use client";

import { motion } from "framer-motion";
import { fadeiIn } from "@/lib/variants";
import MembershipSlider from "./MembershipSlider";
function Membership() {
  return (
    <motion.section
      variants={fadeiIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-4 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20 ">
        <motion.h2
          variants={fadeiIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-white text-center mb-8"
        >
          MemberShip
        </motion.h2>
        <motion.div
        
          variants={fadeiIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Membership;
