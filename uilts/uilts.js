function isObject(data) {
  if (Object.prototype.toString.call(data) === '[object Object]') return true;
}
function isArrays(data) {
  if (Array.isArray(data)) return true;
}
function isNumber(data) {
  if (Object.prototype.toString.call(data) === '[object Number]') return true;
}
function isString(data) {
  if (Object.prototype.toString.call(data) === '[object String]') return true;
}
function objectValueIsEmpty(data) {
  if (Object.keys(data).length === 0) return false;
  Object.keys(data).forEach((value, index) => {
    if (data[value] === '' && data[value] === null) {
      return false;
    }
  })
}

module.exports = {
  isObject,
  isArrays,
  isNumber,
  isString,
  objectValueIsEmpty
};
