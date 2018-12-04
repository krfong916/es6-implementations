Array.prototype.myForEach = function(callbackFcn) {
  let k, T

  if (this == null) {
    throw new TypeError('this is null or undefined')
  }

  console.log(this);
  let O = Object(this) // object constructor eq. to new Object(this)
  console.log("O.length: " + O.length);

  let len = O.length >>> 0
  console.log("len: " + len);

  if (typeof callbackFcn !== 'function') {
    throw new TypeError(callbackFcn + ' is not a function')
  }

  console.log(arguments);
  console.log("arguments.length:" + arguments.length);

  if (arguments.length > 1) {
    T = arguments[1]
  }

  k = 0;

  while(k < len) {
    let kValue
    if (k in O) {
      kValue = O[k]
      console.log("k: " + k);
      console.log("len: " + len);
      console.log(kValue);
      callbackFcn.call(T, kValue, k, O)
    }
    k++
  }

  return undefined
}

let arr = [34,5,6,5]
arr.myForEach(function(number){
	number += (number - 55)
	console.log(number)
})
