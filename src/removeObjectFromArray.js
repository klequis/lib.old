import { remove } from 'ramda'

/**
 * @name removeObjectFromArray
 *
 * @function
 *
 * @description
 * Finds the first object in the array that matches the field/value pair passed in and removes it
 *
 * If the array contains more than one object with the matching field/value pair, only the first object is removed.
 *
 * @param { Array } array - an array of objects
 * @param { string } field - name of field/property evaluage
 * @param { * } value - value of the field/property evaluate
 *
 * @returns { Array }
 * If a match for the field/value pair is found, returns a new array with the specified object removed
 *
 * @returns { number }
 * If a match for field/value is not found, returns <code>false</code>.
 *
 * @example
 * const arr = [{ name: 'joe', age: 20 }, { name: 'jill', age: 21 }]
 *
 * removeObjectFromArray(arr, 'age', 21)
 *
 * // => [{ name: 'joe', age: 20 }]
 *
 */

export const removeObjectFromArray = (array, field, value) => {
  const idx = array.findIndex(i => i[field] === value)
  if (idx === -1) {
    return false
  }
  return remove(idx, 1, array)

}