import React from 'react';

interface FailurePageProps {
  score: number;
  totalQuestions: number;
  onGoHome: () => void;
}

export default function FailurePage({ 
  score, 
  totalQuestions, 
  onGoHome 
}: FailurePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-2xl">
        {/* 실패 아이콘 */}
        <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">😅</span>
        </div>
        
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          아쉽습니다!
        </h2>
        
        <p className="text-gray-600 mb-2">
          다음에 다시 도전해보세요!
        </p>
        
        <p className="text-lg font-semibold text-gray-800 mb-2">
          점수: {score} / {totalQuestions}
        </p>

        <p className="text-sm text-red-600 font-medium mb-6">
          💪 모든 문제를 맞춰야 성공해요!
        </p>

        <button
          onClick={onGoHome}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          🏠 메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}