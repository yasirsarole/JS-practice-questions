class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // add
  enqueue(value) {
    this.items[this.rear++] = value;
  }

  // remove
  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.items[this.front];
    delete this.items[this.front++];
    return value;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
