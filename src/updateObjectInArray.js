import { mergeRight, remove, insert } from 'ramda'

const isUndefined = (vals) => {
  vals.every(val => val === undefined)
}

const incorrectParamsError = new Error(
  'Incorrect parameter(s). Expected (array, string, any, object)'
)

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
    throw new Error(
      `Object not found where field=${field} && value=${value}.`
    )
  }
  const origObj = array[idx]
  const updatedObj = mergeRight(origObj, newObject)
  const arrayWithout = remove(idx, 1, array)
  return insert(idx, updatedObj, arrayWithout)
}
