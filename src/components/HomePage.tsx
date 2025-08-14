'use client';

import React from 'react';
import Image from 'next/image';

interface HomePageProps {
  onStartGame: () => void;
}

/**
 * ✅ 여기에 있는 경로만 수정하면 됩니다 (public/ 기준 절대경로).
 *    예) public/assets/main/logo-mfds.png  →  "/assets/main/logo-mfds.png"
 */
const IMG_LOGO = '/assets/logo.png';        // 상단 로고 이미지 경로
const IMG_START_RING = '/assets/start-ring.png';        // 상단 로고 이미지 경로
const IMG_COSMETICS = '/assets/cosmetics.png';   // 하단 일러스트 경로

export default function HomePage({ onStartGame }: HomePageProps) {
  return (
    <main className="relative min-h-dvh bg-[#fbfbfc] text-[#3c3c3c]  bg-[url(/assets/background.webp)] bg-contain bg-no-repeat bg-center">
      {/* 콘텐츠 폭 제한: 모바일 최적(최대 480px) */}
      <div className="mx-auto max-w-[480px] min-h-dvh px-6 flex flex-col " >
        {/* 상단 여백 */}
        <div className="h-15" />

        {/* 1) 상단 로고 + 기관명 */}
        <header className="flex flex-col items-center text-center">
          {/* ▶ 로고 이미지 (파일 경로는 IMG_LOGO에서만 수정) */}
          
        </header>
        {/* 2) 메인 타이틀 */}
        <section className="mt-5 text-center">
          <h1 className="text-[2rem] leading-tight font-[cafe24Ssurround] tracking-tight text-[#3d3d3d]">
          
          </h1>
        </section>

       {/* 3) START 버튼 구역 */}
        <section className="mt-auto flex flex-col items-center">
          {/* 이미지 버튼 버전: 링 PNG 위에 START 텍스트 오버레이 */}
         
          {IMG_START_RING ? (
            <button
              onClick={onStartGame}
              className="relative w-[180px] h-[180px] rounded-full focus:outline-none active:scale-95 transition cursor-pointer"
              aria-label="퀴즈 시작"
            >
              {/* ▶ START 링 이미지 (경로는 IMG_START_RING에서만 수정) */}
              {/* <Image
                src={IMG_START_RING}
                alt="START"
                fill
                sizes="100px"
                className="object-contain"
              /> */}
              
            </button>
          ) : (
            /* 링 PNG가 없을 때: CSS로 비슷하게 표현 (이미지 없어도 동작) */
            <button
              onClick={onStartGame}
              className="relative w-[150px] h-[150px] rounded-full bg-gradient-to-b from-white to-[#ebebeb]
                         shadow-[inset_0_8px_18px_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.08)]
                         border border-[#e5e5e5] active:scale-95 transition"
              aria-label="퀴즈 시작"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[1rem] font-[cafe24Ssurround] text-[#6b6b6b]">
                START
              </span>
            </button>
          )}
          

          {/* ▶ 버튼 아래 설명 텍스트 */}
          
        </section>

        {/* 4) 하단 일러스트 + 캡션 */}
        <footer className="mt-auto pb-8">
          <div className="mb-10 flex justify-center">
            {/* ▶ 하단 일러스트 (경로는 IMG_COSMETICS에서만 수정) */}
           
          </div>

          {/* 하단 라인 + 캡션 */}
          
            
        </footer>
      </div>
    </main>
  );
}
