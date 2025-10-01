const set = (obj, key, value) => {
  obj[`${key}`] = value;
  return obj;
};

const x = {};

console.log(set(x, 1, 1));

export default set;
