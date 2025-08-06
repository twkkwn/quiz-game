
import React from 'react';

interface SuccessPageProps {
  score: number;
  totalQuestions: number;
  onSaveToAlbum: () => void;
  onGoHome: () => void;
}

export default function SuccessPage({ 
  score, 
  totalQuestions, 
  onSaveToAlbum, 
  onGoHome 
}: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-2xl">
        {/* 성공 아이콘 */}
        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          축하합니다!
        </h2>
        
        <p className="text-gray-600 mb-2">
          퀴즈 해결에 성공하셨습니다!
        </p>
        
        <p className="text-lg font-semibold text-gray-800 mb-2">
          점수: {score} / {totalQuestions}
        </p>

        <p className="text-sm text-green-600 font-medium mb-6">
          🏆 완벽한 점수입니다!
        </p>

        <div className="space-y-3">
          <button
            onClick={onSaveToAlbum}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            📱 내 앨범으로 저장하기
          </button>
          
          <button
            onClick={onGoHome}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            🏠 메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}