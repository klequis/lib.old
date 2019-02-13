import { remove } from 'ramda'

export /**
 *
 *
 * @param { array } array - an array of objects
 * @param { field } field - the object field used for lookup
 * @param { * } value - the value to match in 'field'
//  * @returns { object} - If found, the first object in the array to have the matching key/value pair. Returns , what a messspecified object
 */
const removeObjectFromArray = (array, field, value) => {
  const idx = array.findIndex(i => i[field] === value)
  const newArray = remove(idx, 1, array)
  console.log('newArray')
  return newArray
}