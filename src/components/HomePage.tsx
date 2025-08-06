import React from 'react';

interface HomePageProps {
  onStartGame: () => void;
}

export default function HomePage({ onStartGame }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4">
      {/* 로고 영역 */}
      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-8 shadow-lg">
        <div className="text-3xl">🎯</div>
      </div>
      
      {/* 제목 */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        퀴즈게임에
      </h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        도전하시겠습니까?
      </h2>
      
      {/* 설명 텍스트 */}
      <p className="text-gray-600 text-center mb-8 px-4">
        총 3문제를 모두 맞춰야 성공합니다.
      </p>
      
      {/* 시작 버튼 */}
      <button
        onClick={onStartGame}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 active:scale-95"
      >
        게임 시작하기
      </button>
    </div>
  );
}