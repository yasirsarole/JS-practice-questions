// What is Deep Clone?
// A deep clone creates a completely independent copy of an object, including all nested objects.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const result = {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}
