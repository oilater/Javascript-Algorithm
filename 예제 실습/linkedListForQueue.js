class Node {
  // 연결리스트 구현과 크게 다르지 않다.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  // 생성자 부분도 마찬가지로 크게 다르지 않다.
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 연결 리스트의 append 함수와 크게 다르지 않다.
  // 연결 리스트 코드에서 가장 중요한 개념은 this.tail = newNode 는 대입보다는
  // this.tail이 newNode를 가리킨다고 보아야 한다는 것이다.
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  // Stack을 연결 리스트로 구현했을 때 pop 하는 경우와 동일하다.
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  // peak 함수는 head의 값을 그대로 반환한다.
  peek() {
    return this.head.value;
  }
}
