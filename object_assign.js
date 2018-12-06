// Properties in the target object will be overwritten by properties
// in the sources if they have the same key
// Later sources' properties will similarly overwrite earlier ones
Object.prototype.myAssign = function(target, ...sources) {

  if (target === 'undefined' || target === null) {
    throw new TypeError('target must be an object')
  }

  let to, nextSource, from, desc, propValue, isEnumerable

  to = Object(target)

  // Let sources be the List of argument values starting with the second argument.
  // For each element nextSource of sources, in ascending index order,
  for (let i = 1; i < arguments.length; i++) {
    nextSource = arguments[i]
    // If nextSource is neither undefined nor null, then
    if (nextSource !== undefined || nextSource !== null) {
      // Let from be ToObject(nextSource).
      from = Object(nextSource)
      // Let keys be from.[[OwnPropertyKeys]]().
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
  // Return to
  return to
}

let obj = {
	1: "one",
	2: "two",
	3: "three"
}

let free = Object.myAssign({}, obj)
console.log("free")
console.log(free)
