"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const footerConteinerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
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

function Footer() {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className=" container mx-auto pb-24">
        <motion.div
          variants={footerConteinerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12 "
        >
          {/*info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                alt=""
                width={117}
                height={55}
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              voluptates?
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-access" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-access" />
                <span>0921-750-9248</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-access" />
                <span>mohammadpeyvasteh@gmail.com</span>
              </li>
            </ul>
          </motion.div>
          {/*blog */}
          <motion.div variants={footerItem} className="">
            <h4 className="h4 text-access mb-4">Recent blog posts</h4>
            {/*posts */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-access transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/*post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-access transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/*post */}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-access transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/*gallery */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-access mb-4">Gallery</h4>
            {/*gallery image */}
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </motion.div>
          {/**newsletter */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-access mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                earum!
              </p>
              <form action="" className="flex items-center ">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton text="Send" containerStyles="h-[50px] px-8" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/*copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className=" container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 MohammadPeyvasteh </span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-access transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-access transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-access transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
