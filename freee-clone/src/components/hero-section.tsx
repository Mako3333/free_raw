"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      imgSrc: "https://ext.same-assets.com/1039271917/602737959.png",
      alt: "freee クラウド会計ソフト",
    },
    {
      id: 2,
      imgSrc: "https://ext.same-assets.com/1039271917/3972246995.png",
      alt: "freee クラウド会計ソフト",
    },
    {
      id: 3,
      imgSrc: "https://ext.same-assets.com/1039271917/3138322764.png",
      alt: "freee クラウド会計ソフト",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5f7f9] to-white py-12 md:py-16">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3f4858] mb-4">
              経理と人事を自動化する<br />
              統合型クラウド会計ソフト
            </h1>
            <p className="text-[#3f4858] text-lg mb-8">
              請求書の発行から入金管理、経費精算、給与計算まで。<br />
              すべての経理業務をシームレスに連携。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://accounts.secure.freee.co.jp/sign_up" className="btn-primary text-center">
                無料で開始する
              </Link>
              <Link href="https://secure.freee.co.jp/" className="btn-secondary text-center">
                ログインはこちら
              </Link>
            </div>
          </div>

          {/* Right slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.imgSrc}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#49b1d1]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
