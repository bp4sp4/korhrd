"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 배너 데이터
const banners = [
  {
    id: 1,
    title: "봄 시즌 특별 이벤트",
    imageUrl: "images/banner.png",
    linkUrl: "/events/spring",
    buttonText: "지금 쇼핑하기",
  },
  {
    id: 2,
    title: "신규 회원 할인 혜택",
    imageUrl: "images/banner2.png",
    linkUrl: "/membership",
    buttonText: "가입하기",
  },
];

export default function BannerSlider() {
  return (
    <div className="banner-slider-container relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="relative"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="relative banner-slide overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 z-10">
                <Link href={banner.linkUrl}>
                  <button className="bg-blue-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition shadow-md">
                    {banner.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 - 배경 제거 */}
      <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer">
        <ChevronLeft size={24} className="text-white" />{" "}
        {/* 텍스트 색상을 흰색으로 변경 */}
      </div>
      <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer">
        <ChevronRight size={24} className="text-white" />{" "}
        {/* 텍스트 색상을 흰색으로 변경 */}
      </div>

      {/* 페이지네이션 */}
      <div className="swiper-pagination flex justify-center items-center absolute bottom-4 left-0 right-0 z-10"></div>
    </div>
  );
}
