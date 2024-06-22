"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";

import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav,setOpenNav]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed top-0 max-w-[1920px] w-full  h-[100px] bg-primary-200 transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between ">
        {/*Logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        {/*Mobile nav- hidden on large device */}
        <MobileNav containerStyles={` ${
        headerActive ? "top-[90px]" :"top-[124px]"
      } ${openNav ? ' max-h-max pt-8 pb-10 border-t border-white/10':'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0  text-white xl:hidden text-base uppercase font-medium transition-all` }/>
        {/*desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 hidden xl:flex text-white text-base uppercase font-medium transition-all" />
        {/*open/hide menu button */}
        <div className="flex items-center gap-4">
          {/*login & register */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-access transition-all uppercase text-base font-medium">Login</button>
            <button className="hover:text-access transition-all uppercase text-base font-medium">Register</button>

          </div>
          <button onClick={()=>setOpenNav(!openNav)} className="text-white xl:hidden">
            <MdMenu className="text-4xl"/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;