// https://school.programmers.co.kr/learn/courses/13213/lessons/91078?language=javascript

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

function solution(priorities, location) {
  let q = new Queue(priorities.length);
  let arr = q.queue;
  for (const item of priorities) {
    arr.push(item);
  }

  let max = arr[0];
  for (const item of arr) {
    if (max < item) {
      max = item;
    }
  }

  let answer = 0;
  for (const item of arr) {
    
  }

  return max;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
