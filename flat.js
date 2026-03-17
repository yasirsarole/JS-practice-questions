const arr = [1, [2, 3], [4, [5, 6]]];
arr.flat(); // [1, 2, 3, 4, [5, 6]]
arr.flat(2); // [1, 2, 3, 4, 5, 6]
arr.flat(Infinity); // [1, 2, 3, 4, 5, 6]

function flatten(arr, depth = 1) {
  if (depth === 0) return arr;

  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatten(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(flatten(arr, 1));
// ABOVE SOLUTION PROBLEMS
// Deep nesting → Maximum call stack exceeded
// concat / spread → extra memory allocations (slow)

// Optimal Solution (Iterative + Queue)
function flattenOptimal(arr, depth = 1) {
  const result = [];
  const queue = arr.map((item) => ({ value: item, depth }));

  while (queue.length) {
    const { value, depth } = queue.shift();

    if (Array.isArray(value) && depth > 0) {
      for (let i = 0; i < value.length; i++) {
        // need to add again because we removed first element from queue
        queue.push({ value: value[i], depth: depth - 1 });
      }
    } else {
      result.push(value);
    }
  }

  return result;
}

console.log(flattenOptimal(arr, 1));
