// https://school.programmers.co.kr/learn/courses/13213/lessons/91081?language=javascript

// 1. 같은 장르 끼리 묶기
// 2. 묶인 노래를 재생 순으로 정렬
// 3. 노래를 2개까지 자르는 작업을 해야 함

// 핵심 키워드 '묶는 것', '정렬'
// 묷는 게 나오면 해시 테이블일 가능성이 높음.
function solution(genres, plays) {
  const genreMap = new Map();

  //장르 배열과 재생 배열을 하나로 묶어줄 것. 계산하기 편하도록
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .splice(0, 2),
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
