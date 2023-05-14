// https://school.programmers.co.kr/learn/courses/13213/lessons/91074?language=javascript

function solution(s) {
  let count = 0;

  for (const c of s) {
    if (c === "(") {
      count++;
    } else {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count !== 0 ? false : true;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
