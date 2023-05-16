// https://school.programmers.co.kr/learn/courses/13213/lessons/91081?language=javascript

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre);
      genreMap.set(genre, {
        total: data.total + play,
      });
    });

  return genreMap;
  // const genreMap = new Map();

  // genres
  //   .map((genre, index) => [genre, plays[index]])
  //   .forEach(([genre, play], index) => {
  //     const data = genreMap.get(genre) || { total: 0, songs: [] };
  //     genreMap.set(genre, {
  //       total: data.total + play,
  //       songs: [...data.songs, { play, index }]
  //         .sort((a, b) => b.play - a.play)
  //         .splice(0, 2),
  //     });
  //   });

  // return [...genreMap]
  //   .sort((a, b) => b[1].total - a[1].total)
  //   .flatMap((item) => item[1].songs)
  //   .map((song) => song.index);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
