import { BaseComponent, type Page } from '@/core';

import './style.css';
// TYPES
type quizeQuestion = {
  id: string;
  question: string;
  answers: string[];
  rightAnswer: number;
};

type QuizState = {
  currentIndex: number;
  selectedIndex: number | null;
  isLocked: boolean;
  score: number;
};

//DATA
const questions: quizeQuestion[] = [
  {
    id: 'q1',
    question: 'Что вернет typeof null?',
    answers: ['null', 'undefined', 'object', 'NaN'],
    rightAnswer: 2,
  },
  {
    id: 'q2',
    question: 'Какой метод добавляет элемент в конец массива?',
    answers: ['push', 'pop', 'shift', 'map'],
    rightAnswer: 0,
  },
  {
    id: 'q3',
    question: 'Что делает === ?',
    answers: ['сравнение по типу', 'строгое сравнение', 'преобразует строку в число', 'проверяет null'],
    rightAnswer: 1,
  },
  {
    id: 'q4',
    question: "Что вернет Boolean('')",
    answers: ['false', 'true', 'undefined', 'error'],
    rightAnswer: 0,
  },
  {
    id: 'q5',
    question: 'Какой тип у undefined?',
    answers: ['null', 'object', 'boolean', 'underfinded'],
    rightAnswer: 3,
  },
];

const state: QuizState = {
  currentIndex: 0,
  selectedIndex: null,
  isLocked: false,
  score: 0,
};

// RENDERR

function renderQuiz() {
  const screen = document.createElement('div');
  screen.classList.add('quiz-screen');

  const questionBlock = document.createElement('div');
  questionBlock.classList.add('question-block');
  const currentQuestion = questions[state.currentIndex];

  if (!currentQuestion) throw new Error('Нету вопроса');
  questionBlock.textContent = currentQuestion.question;

  const answersBlock = document.createElement('div');
  answersBlock.classList.add('answers-block');

  currentQuestion.answers.forEach((answerText, index) => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.type = 'button';
    button.textContent = answerText;

    button.addEventListener('click', () => choseAnswer(index));

    if (state.isLocked) {
      if (index === currentQuestion.rightAnswer) {
        button.classList.add('correct');
      }

      if (state.selectedIndex === index && state.selectedIndex != currentQuestion.rightAnswer) {
        button.classList.add('wrong');
      }
    }
    answersBlock.append(button);
  });

  const moveBlock = document.createElement('div');
  moveBlock.classList.add('move-block');

  if (state.isLocked) {
    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Next';

    nextButton.addEventListener('click', () => nextQuestion());
    moveBlock.append(nextButton);
  }

  screen.append(questionBlock, answersBlock, moveBlock);

  return screen;
}

//FUNKSH

function choseAnswer(index: number) {
  if (state.isLocked) return;
  state.selectedIndex = index;

  const currentQuestion = questions[state.currentIndex];
  if (!currentQuestion) throw new Error('Нету вопроса');

  if (state.selectedIndex === currentQuestion.rightAnswer) {
    state.score++;
  }

  state.isLocked = true;
}

function nextQuestion() {
  state.currentIndex++;

  state.selectedIndex = null;
  state.isLocked = false;
}

export function widgetEnginePage(): Page {
  return {
    render() {
      //в конце оборачиваем всё в BaseComponent (для совместимости)
      return new BaseComponent(renderQuiz());
    },
    onMount: () => console.log('Страница смонтирована'),
  };
}
