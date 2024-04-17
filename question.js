// data.js 가져오기 -- 배열로
import {questions} from './data.js'


// question.html 에 있는 각 태그 위치를 변수로 정의
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
// DOM 알아보기 document -> html에서 최상위
// 선택버튼에 EventListener를 달아 놓는다. function() 콜백함수(뒤에있는함수)


choice1El.addEventListener('click', function(){
  nextQuestion(0)

})

choice2El.addEventListener('click', function(){
  nextQuestion(1)

})


let currentNumber = 0


function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
}


function nextQuestion(choiceNumber){
  if(currentNumber === questions.length-1){
    //결과 페이지 보이기
    showResultPage()
    return
  }
  currentNumber = currentNumber + 1
  progressValueEl.style.width = (currentNumber+1) * 10 + '%'
  renderQuestion()
}

renderQuestion()