'use client'
import React from "react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

function SwiperNavButtons({
 containerStyle,
  btnStyles,
  iconsStyles,
}: {
  containerStyle:string
  btnStyles: string;
  iconsStyles: string;
}) {
  const swiper=useSwiper()
  return ( <div className={`${containerStyle}`}>
    <button className={`${btnStyles}`} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsStyles}`}/>
    </button>
    <button className={`${btnStyles}`} onClick={()=>swiper.slideNext()}>
        
        <PiCaretRightBold className={`${iconsStyles}`}/>
    </button>
  </div>
  )
}

export default SwiperNavButtons;
