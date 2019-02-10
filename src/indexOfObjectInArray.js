export const indexOfObjectInArray = (array, field, value) => {
  return array.findIndex(i => i[field] === value)
}