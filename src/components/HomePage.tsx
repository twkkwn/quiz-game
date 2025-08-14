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
    <main className="min-h-screen bg-[#f7f7f7] text-[#3c3c3c]">
      {/* 콘텐츠 폭 제한: 모바일 최적(최대 480px) */}
      <div className="mx-auto max-w-[480px] min-h-screen px-6 flex flex-col">
        {/* 상단 여백 */}
        <div className="h-25" />

        {/* 1) 상단 로고 + 기관명 */}
        <header className="flex flex-col items-center text-center">
          {/* ▶ 로고 이미지 (파일 경로는 IMG_LOGO에서만 수정) */}
          <Image
            src={IMG_LOGO}
            alt="식품의약품안전처 로고"
            width={200}
            height={50}
            priority
          />
        </header>
        {/* 2) 메인 타이틀 */}
        <section className="mt-2 text-center">
          <h1 className="text-[2.5rem] leading-tight font-[cafe24Ssurround] tracking-tight text-[#3d3d3d]">
            퀴즈게임에
            <br />
            도전하시겠습니까?
          </h1>
        </section>

       {/* 3) START 버튼 구역 */}
        <section className="mt-auto flex flex-col items-center">
          {/* 이미지 버튼 버전: 링 PNG 위에 START 텍스트 오버레이 */}
         
          {IMG_START_RING ? (
            <button
              onClick={onStartGame}
              className="relative w-[100px] h-[100px] rounded-full focus:outline-none active:scale-95 transition cursor-pointer"
              aria-label="퀴즈 시작"
            >
              {/* ▶ START 링 이미지 (경로는 IMG_START_RING에서만 수정) */}
              <Image
                src={IMG_START_RING}
                alt="START"
                fill
                sizes="100px"
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[1rem] font-[cafe24Ssurround] text-[#6b6b6b]">
                START
              </span>
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
          <p className="mt-3 text-[1rem] text-[#000000] font-[oneMobile] font-normal tracking-tight text-center">
            클릭 시 퀴즈가 시작됩니다
          </p>
        </section>

        {/* 4) 하단 일러스트 + 캡션 */}
        <footer className="mt-auto pb-8">
          <div className="mb-10 flex justify-center">
            {/* ▶ 하단 일러스트 (경로는 IMG_COSMETICS에서만 수정) */}
            <Image
              src={IMG_COSMETICS}
              alt="화장품 일러스트"
              width={300}
              height={100}
              className="object-contain w-auto h-auto"
            />
          </div>

          {/* 하단 라인 + 캡션 */}
          <div className="border-t border-[#cfcfcf] pt-3 text-center">
            <span className="text-[18px] font-[cafe24Ssurround] tracking-tight">
              2025 화장품의 날
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
