'use client';

import React, { useState } from 'react';
import { GameState, QuizData } from '@/types/quiz';
import { selectGameQuestions } from '../data/quizData';
// import HomePage from './HomePage';
import GamePage from './GamePage';
import ResultPopup from './ResultPopup';
import SuccessPage from './SuccessPage';
import FailurePage from './FailurePage';
import HomePage from './HomePage';

export default function QuizGame() {
  // 상태 관리
  const [gameState, setGameState] = useState<GameState>(GameState.HOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<QuizData[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  // 게임 시작 함수 (수정된 로직 적용)
  const startGame = () => {
    // 0번 고정 + 1,2,3,4번 중 랜덤 2개 선택
    const selected = selectGameQuestions();
    
    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setGameState(GameState.PLAYING);
  };

  // 답안 선택 처리
  const handleAnswerSelect = (answerIndex: number) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correct = answerIndex === currentQuestion.correctAnswer;
    
    setCurrentAnswer(answerIndex);
    setIsCorrect(correct);
    
    // 점수 업데이트
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // 사용자 답안 저장
    setUserAnswers(prev => [...prev, answerIndex]);
    
    // 결과 팝업 표시
    setGameState(GameState.RESULT_POPUP);
  };

  // 다음 문제로 이동
  const goToNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentAnswer(null);
      setGameState(GameState.PLAYING);
    } else {
      // 모든 문제 완료 - 3문제 모두 맞춰야 성공
      if (score === selectedQuestions.length) {
        setGameState(GameState.SUCCESS);
      } else {
        setGameState(GameState.FAILURE);
      }
    }
  };

  // 메인으로 돌아가기
  const goToHome = () => {
    setGameState(GameState.HOME);
    setCurrentQuestionIndex(0);
    setSelectedQuestions([]);
    setUserAnswers([]);
    setCurrentAnswer(null);
    setScore(0);
  };

  // 앨범 저장 (임시 구현)
  const saveToAlbum = () => {
    alert('앨범에 저장되었습니다! (실제 구현 시 갤러리 API 연동 필요)');
  };

  // 게임 상태에 따른 화면 렌더링
  switch (gameState) {
    case GameState.HOME:
      return <HomePage onStartGame={startGame} />;
      
    case GameState.PLAYING:
      return (
        <GamePage 
          currentQuestion={selectedQuestions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={selectedQuestions.length}
          onAnswerSelect={handleAnswerSelect}
        />
      );
      
    case GameState.RESULT_POPUP:
      return (
        <ResultPopup 
          currentQuestion={selectedQuestions[currentQuestionIndex]}
          isCorrect={isCorrect}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={selectedQuestions.length}
          onNextQuestion={goToNextQuestion}
        />
      );
      
    case GameState.SUCCESS:
      return (
        <SuccessPage 
          score={score}
          totalQuestions={selectedQuestions.length}
          onSaveToAlbum={saveToAlbum}
          onGoHome={goToHome}
        />
      );
      
    case GameState.FAILURE:
      return (
        <FailurePage 
          score={score}
          totalQuestions={selectedQuestions.length}
          onGoHome={goToHome}
        />
      );
      
    default:
      return <HomePage onStartGame={startGame} />;
  }
}