"use client"
import React, { useEffect, useState } from 'react'
import styleProgram from './ourprogram.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const OurProgram = () => {
  const [slides, setSlides] = useState([]);        // ✅ images
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // ✅ swiper instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/next-app/data/ourprogram/data.json");
        if (!res.ok) throw new Error("Failed to load JSON");
        const data = await res.json();
        setSlides(data);
        // console.log(data)
      } catch (err) {
        console.error(err)
      }
    };
    console.log(slides);

    fetchData();
  }, []);
  return (
    <div>
      <section className={styleProgram["our-program"]}>
        <h2 className={styleProgram["our-program-title"]}>Our Programs</h2>
        <div className="container">
          {/* Main Slider */}
          <Swiper
            modules={[Navigation, Thumbs]}
            slidesPerView={3}
            centeredSlidesBounds={true}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={5}
            speed={900}   // smooth transition
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src.img}
                  alt={`Image ${index}`}
                  width={337}
                  height={200}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default OurProgram
