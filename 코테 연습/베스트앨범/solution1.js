// https://school.programmers.co.kr/learn/courses/13213/lessons/91081?language=javascript

function solution(genres, plays) {
  const answer = [];
  const s = new Set();
  const obj = {};

  for (let i = 0; i < genres.length; i++) {
    if(s.has(genres[i])) {
        obj[genres[i]] = 

    }
    

    obj[genres[i]] = 
  }

  return s;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
