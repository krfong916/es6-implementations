/**
 * Object.prototype.myAssign - the assign function is used to copy values of
 * all of the enumerable properties from one or more source objects to a target
 * object.
 */
Object.prototype.myAssign = function(target, ...sources) {
  if (target === 'undefined' || target === null) {
    throw new TypeError('target must be an object')
  }
  let to, nextSource, from, desc, propValue, isEnumerable
  to = Object(target)

  for (let i = 1; i < arguments.length; i++) {
    nextSource = arguments[i]
    if (nextSource !== undefined || nextSource !== null) {
      from = Object(nextSource)
      keys = Object.keys(from)
      for (let j = 0; j < keys.length; j++) {
        nextKey = keys[j]
        desc = Object.getOwnPropertyDescriptor(from, nextKey)
        if (desc !== 'undefined' && desc.enumerable) {
          to[j] = from[nextKey]
        }
      }
    }
  }
  return to
}

let obj = {
	1: "one",
	2: "two",
	3: "three"
}

let tro = {
	4: "four",
	5: "five",
	6: "six"
}

let overlap = {
	1: "hey",
	3: "there",
	5: "way"
}

let oneObj = Object.myAssign({}, obj)
console.log("oneObj")
console.log(oneObj)

let twoObj = Object.myAssign({}, obj, tro)
console.log("twoObj")
console.log(twoObj)

let overlapObj = Object.myAssign({}, obj, tro, overlap)
console.log("overlapObj")
console.log(overlapObj)
