// type AsyncTask = () => Promise<unknown>;

class AsyncTaskQueue {
  // private running: number;
  // private limit: number;
  // private tasks: AsyncTask[];

  constructor(concurrency) {
    this.running = 0;
    this.limit = concurrency;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.runNext();
  }

  runNext() {
    if (this.running >= this.limit) return;
    if (this.tasks.length === 0) return;

    // this will remove the first element from tasks array and assign to task
    const task = this.tasks.shift();
    if (!task) return;
    this.running++;

    task()
      .catch(() => {}) // silent ignore
      .finally(() => {
        this.running--;
        this.runNext();
      });
  }
}

const queue = new AsyncTaskQueue(2);
const createTask = (id, delay) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(`Task ${id} done`);
    }, delay);
  });

const createTask2 = (id, delay) => () =>
  new Promise((res, reject) => {
    setTimeout(() => {
      return reject();
    }, delay);
  });

queue.addTask(createTask(1, 1000));
queue.addTask(createTask(2, 2000));
queue.addTask(createTask(3, 500));
queue.addTask(createTask2(4, 800));
queue.addTask(createTask(5, 1500));
