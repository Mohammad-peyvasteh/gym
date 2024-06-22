"use client";

import Link from "next/link";

import Image from "next/image";

const brandsImages = [
  {
    src: "/assets/img/brands/brand-1.png",
    href: "/",
  },
  {
    src: "/assets/img/brands/brand-2.png",
    href: "/",
  },
  {
    src: "/assets/img/brands/brand-3.png",
    href: "/",
  },
  {
    src: "/assets/img/brands/brand-4.png",
    href: "/",
  },
  {
    src: "/assets/img/brands/brand-5.png",
    href: "/",
  },
];

import { motion } from "framer-motion";

const brandConteinerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: {
    y: 20, opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

function Brands() {
  return (
    <section className="py-10" id="contact">
      <div className=" container mx-auto">
        <motion.div
          variants={brandConteinerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-5 py-t"
        >
          {brandsImages.map((img, index) => {
            return (
              <motion.div
                variants={brandItem}
               
                key={index}
              >
                <Link href={img.href} className=" group">
                  <Image
                    alt=""
                    height={106}
                    width={204}
                    src={img.src}
                    className=" opacity-50 group-hover:opacity-100 transition-all mx-auto"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Brands;
