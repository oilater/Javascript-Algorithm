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
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  let count = 0;
  let index = 0;

  let q = new Queue();
  q.queue.push(priorities[0]);
  for (let i = 1; i < priorities.length; i++) {
    if (priorities[i] > q.queue[q.queue.length - 1]) {
      q.queue.pop();
      q.queue.push(priorities[i]);
      index = priorities.indexOf(q.queue[0]);
    }
  }

  for (let i = index; i < priorities.length; i++) {
    count++;
    if (i === location) {
      return count;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
