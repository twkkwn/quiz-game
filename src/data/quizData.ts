import { QuizData } from "@/types/quiz";

// 전체 퀴즈 데이터 (5문제)
// 0번 문제는 항상 첫 번째로 출제 (고정)


// 1,2,3,4번 문제 중에서 랜덤으로 2개 선택
export const QUIZ_DATA: QuizData[] = [
  {
    id: 1,
    question: "매년 지정된 '화장품의 날'은 언제일가요?",
    options: ["1월 1일", "3월 15일", "6월 10일", "9월 7일", "12월 31일"],
    correctAnswer: 3,
    explanation: "식약처는 9월 7일을 '화장품의 날'로 지정해, 안전·품질 강화와 대국민 인식 제고를 추진합니다."
  },
  {
    id: 2,
    question: "2024년 우리나라 화장품 수출액은 사상 최대치를 기록했습니다. 세계 화장품 수출국 순위에서 몇 위를 차지했을까요?",
    options: ["1위", "2위", "3위", "4위", "5위"],
    correctAnswer: 2,
    explanation: "2024년 한국 화장품 수출액은 102억 달러로, 독일을 제치고 세계 3위 수출국이 되었습니다."
  },
  {
    id: 3,
    question: "2024년 기초화장품의 생산액이 처음으로 10조 원을 돌파했는데, 해당 유형에서 가장 큰 생산 증가율을 보인 세부 품목은 무엇인가요?",
    options: ["선크림", "립스틱", "팩·마스크", "바디로션", "아이섀도우"],
    correctAnswer: 2,
    explanation: "팩·마스크 생산액은 9,868억 원 → 1조 3,169억 원으로 +33.5% 증가. 기초 부문 내 가장 큰 성장률을 기록했습니다."
  },
  {
    id: 4,
    question: "우리나라 최초의 근대적 화장품으로 기록되는 제품은 무엇인가요?",
    options: ["미화분", "동동구리무", "박가분", "레온세안크림", "촌가분"],
    correctAnswer: 2,
    explanation: "'박가분'은 1915년 박승직이 출시한 우리나라 최초의 근대적 화장품으로, 국산 화장품 산업의 출발점으로 평가받습니다."
  },
  {
    id: 5,
    question: "다음중 화장품이 아닌 것은?",
    options: ["립스틱", "액취방지제", "향수", "제모제", "흑채"],
    correctAnswer: 1,
    explanation: "액취방지제는 땀 발생 억제를 통한 액취의 방지를 목적으로 사용하는 외양제로 의약외품으로 지정되어 있습니다."
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