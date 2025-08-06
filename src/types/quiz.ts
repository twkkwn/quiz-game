// 퀴즈 데이터 타입 정의
export interface QuizData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// 게임 상태 열거형
export enum GameState {
  HOME = 'HOME',
  PLAYING = 'PLAYING',
  RESULT_POPUP = 'RESULT_POPUP',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

// 게임 결과 타입
export interface GameResult {
  score: number;
  totalQuestions: number;
  isSuccess: boolean;
}