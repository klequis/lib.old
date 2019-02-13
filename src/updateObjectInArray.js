import { mergeRight, remove, insert } from 'ramda'

const isUndefined = (vals) => {
  vals.every(val => val === undefined)
}

const incorrectParamsError = new Error(
  'Incorrect parameter(s). Expected (array, string, any, object)'
)

/**
 *
 *
 * @param { Array } array - an array of objects
 * @param { string } field - name of the object property used for matching
 * @param { * } value - the property value used for matching
 * @param { Object } newObject - an object containg the new values
 *
 * @returns { Array }
 * If a match for field/value is found, returns and a new array containg the updated object.
 *
 * @returns { number }
 * If a match for field/value is not found, returns -1
 *
 * If the array contains 2 objects with the same matching field/value pair, the first object found will be updated. Best used on unique fields.
 *
 * @example
 * const arr = [{ name: 'joe', age: 20 }, { name: 'jill', age: 21 }]
 *
 * updateObjectInArray(arr, 'name', 'joe', { name: 'joseph' })
 *
 * // => [{ name: 'joseph', age: 20 }, { name: 'jill', age: 21 }]
 */
export function updateObjectInArray (array, field, value, newObject) {
  console.log('arguments.length', arguments.length)

  if (isUndefined([array, field, value, newObject])) {
    throw incorrectParamsError
  }

  // if (!Array.isArray(array)) {
  //   throw incorrectParamsError
  // }
  // if (!typeof field === 'string') {
  //   throw incorrectParamsError
  // }

  if (arguments.length < 4) {
    throw new Error(
      `4 arguments required, but only ${arguments.length} present`
    )
  }
  const idx = array.findIndex(o => o[field] === value)
  // console.log('**** idx', idx)

  if (idx === -1) {
    return idx
  }
  const origObj = array[idx]
  const updatedObj = mergeRight(origObj, newObject)
  const arrayWithout = remove(idx, 1, array)
  return insert(idx, updatedObj, arrayWithout)
}
