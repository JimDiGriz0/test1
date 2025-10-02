const set = (obj, key, value) => {
  if (!Object.hasOwn(obj, key)) {
    obj[key] = value;
  }
  return obj;
};

export default set;
