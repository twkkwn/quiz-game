import React from 'react';
import { QuizData } from '@/types/quiz';

interface ResultPopupProps {
  currentQuestion: QuizData;
  isCorrect: boolean;
  currentQuestionIndex: number;
  totalQuestions: number;
  onNextQuestion: () => void;
}

export default function ResultPopup({ 
  currentQuestion, 
  isCorrect, 
  currentQuestionIndex, 
  totalQuestions, 
  onNextQuestion 
}: ResultPopupProps) {
  return (
    <div className="min-h-screen bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
        {/* 결과 아이콘 */}
        <div className="text-center mb-6">
          <div className={`rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 ${
            isCorrect ? 'bg-green-100' : 'bg-red-100'
          }`}>
            <span className="text-4xl">
              {isCorrect ? '⭕' : '❌'}
            </span>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${
            isCorrect ? 'text-green-600' : 'text-red-600'
          }`}>
            {isCorrect ? '정답입니다!' : '오답입니다!'}
          </h3>
        </div>

        {/* 해설 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">해설</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {currentQuestion.explanation}
          </p>
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={onNextQuestion}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {currentQuestionIndex < totalQuestions - 1 ? '다음 문제' : '결과 보기'}
        </button>
      </div>
    </div>
  );
}