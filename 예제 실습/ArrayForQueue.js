class Queue {
  // 먼저 3개의 클래스 변수가 필요하다.
  // 요소를 넣을 배열 변수와 각각 front와 rear을 나타내기 위한 index 변수가 필요하다.
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue 함수는 rear 영역에 값을 넣고 rear 인덱스를 하나 증가시키면 된다.
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // front 인덱스에 해당하는 값을 반환하고 증가시키면 된다.
  // 하지만 바로 반환하면 함수가 종료되기에 임시로 변수에 값을 넣어두고 삭제한 다음 인덱스 값을 증가하고 반환하면 된다.
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  // peek 함수는 queue의 가장 앞에 있는 값을 알아내는 함수다. 프론트 인덱스에 해당하는 값을 반환한다.
  peek() {
    return this.queue[this.front];
  }

  //큐의 길이는 아래처럼 간단히 구할 수 있다.
  size() {
    return this.rear - this.front;
  }
}

const que = new Queue();
que.enqueue(1);
que.dequeue();
console.log(que);
