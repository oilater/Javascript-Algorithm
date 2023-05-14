// https://school.programmers.co.kr/learn/courses/13213/lessons/91074?language=javascript

function solution(s) {
  let answer = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }

  return answer.length === 0 ? true : false;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
