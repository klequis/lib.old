import { mergeRight, remove, insert } from 'ramda'
import { isUndefined } from './util'

const incorrectParamsError = new Error(
  'Incorrect parameter(s). Expected (array, string, any, object)'
)

/**
 *
 * @description
 * Finds the first object in the array that matches the field/value pair passed in and updates the object with properties contained in newObject
 *
 * If the array contains more than one object with the matching field/value pair, only the first object found is updated.
 *
 * @function
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
 * If a match for field/value is not found, returns <code>false</code>.
 *
 * @example
 * const arr = [{ name: 'joe', age: 20 }, { name: 'jill', age: 21 }]
 *
 * updateObjectInArray(arr, 'name', 'joe', { name: 'joseph' })
 *
 * // => [{ name: 'joseph', age: 20 }, { name: 'jill', age: 21 }]
 *
 */
export function updateObjectInArray (array, field, value, newObject) {
  try {
    if (isUndefined([array, field, value, newObject])) {
      throw incorrectParamsError
    }
    const idx = array.findIndex(o => o[field] === value)

    if (idx === -1) {
      return false
    }
    const origObj = array[idx]
    const updatedObj = mergeRight(origObj, newObject)
    const arrayWithout = remove(idx, 1, array)
    return insert(idx, updatedObj, arrayWithout)
  }
  catch (e) {
    /* istanbul ignore next */
    console.log('Error (updateObjectInArray)', e);
  }
}
