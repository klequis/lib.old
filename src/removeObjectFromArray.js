import { remove } from 'ramda'


const removeObjectFromArray = (array, field, value) => {
  const idx = array.findIndex(i => i[field] === value)
  const newArray = remove(idx, 1, array)
  console.log('newArray')
  return newArray
}