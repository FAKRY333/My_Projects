// let's start to craete conter
let input = document.querySelector('.in');
let btn = document.querySelector('.btn');
let result = document.querySelector('.resONE');
let result1 = document.querySelector('.resTWO');
  

// function one  get the length of letters 
function conter1(value) {
  const letters = [];
  for (let i = 0 ; i < value.length; i++){
if (value[i] !== ' ') { letters.push(value[i])}
  }
 return letters.length
}

//  and function two  get the length of words 
function conter2(value) {
  return  value.split(' ').length
}



// add the result to page 
btn.onclick = function () {
  // check for value
 if (input.value.length === 0) return ; 
  // get array and add result functions and add  to localStorge
const localTotlas = CreateLocal();
localTotlas[0] = {Letters:conter1(input.value), Words:conter2(input.value.trim())}
localStorage.setItem('result',JSON.stringify(localTotlas));
// add to page 
        result.innerHTML = `The litters is: ${(conter1(input.value))}`;
        result1.innerHTML = `The words is: ${(conter2(input.value.trim()))}`;
}



// crete array or get the data From localStorge
function CreateLocal() {
  const LettersStorgAndWords = localStorage.getItem('letters');
  return LettersStorgAndWords ? JSON.parse(LettersStorg) : [] 
}

// add the result to page onload  
window.onload = () => {
  const resultInLocal = JSON.parse(localStorage.getItem('result'))[0] ;
 result.innerHTML = `The litters is: ${resultInLocal.Letters}`;
  result1.innerHTML = `The Words is: ${resultInLocal.Words}`;
}

// finshed made my fakry 