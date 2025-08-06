import { QuizData } from "@/types/quiz";

// 전체 퀴즈 데이터 (5문제)
// 0번 문제는 항상 첫 번째로 출제 (고정)


// 1,2,3,4번 문제 중에서 랜덤으로 2개 선택
export const QUIZ_DATA: QuizData[] = [
  {
    id: 1,
    question: "대한민국의 수도는 서울이다.",
    options: ["O", "X"],
    correctAnswer: 0,
    explanation: "대한민국의 수도는 서울특별시입니다."
  },
  {
    id: 2,
    question: "지구는 태양 주위를 돈다.",
    options: ["O", "X"],
    correctAnswer: 0,
    explanation: "지구는 태양을 중심으로 공전합니다."
  },
  {
    id: 3,
    question: "물의 끓는점은 섭씨 90도이다.",
    options: ["O", "X"],
    correctAnswer: 1,
    explanation: "물의 끓는점은 섭씨 100도입니다."
  },
  {
    id: 4,
    question: "한 해는 365일이다.",
    options: ["O", "X"],
    correctAnswer: 1,
    explanation: "윤년을 제외하고는 365일이지만, 정확히는 평년 365일, 윤년 366일입니다."
  },
  {
    id: 5,
    question: "북극곰은 남극에 산다.",
    options: ["O", "X"],
    correctAnswer: 1,
    explanation: "북극곰은 북극에 살며, 남극에는 펭귄이 삽니다."
  }
];

// 게임용 문제 선택 함수
export const selectGameQuestions = (): QuizData[] => {
  // 1. 첫 번째 문제 (0번 인덱스) 고정
  const fixedQuestion = QUIZ_DATA[0];
  
  // 2. 나머지 문제들 (1,2,3,4번 인덱스) 중에서 2개 랜덤 선택
  const remainingQuestions = QUIZ_DATA.slice(1); // [1,2,3,4번 문제]
  const shuffled = [...remainingQuestions].sort(() => Math.random() - 0.5);
  const selectedTwo = shuffled.slice(0, 2);
  
  // 3. 최종 출제 문제: [0번 고정, 랜덤1, 랜덤2]
  return [fixedQuestion, ...selectedTwo];
};