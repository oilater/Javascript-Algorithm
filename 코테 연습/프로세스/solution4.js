// https://school.programmers.co.kr/learn/courses/13213/lessons/91078?language=javascript

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  //dequeue 는 항상 값을 반환해준다는 걸 잊지 말기!
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return value;
  }

  peek() {
    return this.queue[this.front];
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    for (const item of queue.queue) {
      if (item[0] < priorities[count]) {
        queue.enqueue(queue.dequeue());
      } else {
        const value = queue.dequeue();
        count++;
        if (value[1] === location) {
          return count;
        }
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
