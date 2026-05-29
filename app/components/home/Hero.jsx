import heroStyle from './hero.module.css'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';
import PrimaryButton from '../ui/PrimaryButton';


const Hero = () => {
  const [heroSlide, setHeroSlide] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/heroSlider.json");
        if (!res.ok) throw new Error("Failed to load JSON");
        const data = await res.json();
        setHeroSlide(data);
      } catch (err) {
        console.error(err)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop
        speed={900}   // smooth transition
        className={heroStyle.heroSwiper}
      >
        {heroSlide.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={heroStyle.bannerSize}>
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"  // important for responsiveness
                priority={i === 0}
                className={heroStyle.objectCover} // important for responsiveness
              />

              {/* Overlay */}
              <div className={heroStyle.colorOverlay} />
              {/* Content */}
              <div className="container">
                <div className={heroStyle.content}>
                  <div>
                    <h2 className={heroStyle.bannerTitle}>
                      {slide.title}
                    </h2>
                    <p className={heroStyle.bannerDesc}>
                      {slide.desc}
                    </p>
                    <PrimaryButton/>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
