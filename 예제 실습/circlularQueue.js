class Queue {
  // maxSize 를 받아 queue의 사이즈를 제한한다.
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  // 크기를 벗어날 경우 다시 0번 인덱스부터 시작하도록 코드를 작성함.
  // enqueue가 증가될 경우 최대 크기로 나머지 연산을 해준다.
  // 최대 크기를 벗어날 경우 다시 0부터 시작한다.
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

  // 큐가 꽉찼는지 확인하는 함수. 이를 통해 무한정 enqueue되는 것을 막을 수 있다.
  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}
