'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

const slides = [
  { src: "/dayunowu.jpg", alt: "Slide 1" },
  { src: "/wang.jpg", alt: "Slide 2" },
  { src: "/tagu.jpg", alt: "Slide 3" },
  { src: "/bowen.jpg", alt: "Slide 4" },
  { src: "/daonoyushi.jpg", alt: "Slide 5" },
  { src: "/daonosiji.jpg", alt: "Slide 6" },
  { src: "/papernet.jpg", alt: "Slide 7" },
  { src: "/shuidi.jpg", alt: "Slide 8" },
];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, EffectFade]} effect="fade"
        className="mySwiper w-full h-[1000px]"
      >
        {/* images */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />

              {/* shadow overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
