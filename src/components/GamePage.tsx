import React from 'react';
import { QuizData } from '@/types/quiz';

interface GamePageProps {
  currentQuestion: QuizData;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswerSelect: (answerIndex: number) => void;
}

export default function GamePage({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  onAnswerSelect 
}: GamePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col p-4">
      {/* 진행률 표시 */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">문제 진행률</span>
          <span className="text-sm font-bold text-gray-800">
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 문제 카드 */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-lg flex-grow">
        <div className="text-center mb-8">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❓</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-relaxed">
            {currentQuestion.question}
          </h3>
        </div>

        {/* 답안 선택 버튼 */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className="w-full py-4 px-6 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-300 rounded-lg text-lg font-semibold text-gray-700 transition-all duration-200 transform hover:scale-102 active:scale-98"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}