

const indexOfObjectInArray = (arr, _id) => {
  return arr.findIndex(i => i._id === _id)
}

const deletePerson = (state, payload) => {
  const _id = payload[0]._id
  const idx = indexOfObjectInArray(state, _id)
  const newState = remove(idx, 1, state)
  return newState
}