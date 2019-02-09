"use strict";

const updatePerson = (state, newPerson) => {
  const idx = indexOfObjectInArray(state, newPerson._id);
  const oldPerson = state[idx];
  const updatedPerson = merge(oldPerson, newPerson);
  const stateRemoved = remove(idx, 1, state);
  const newState = insert(idx, updatedPerson, stateRemoved);
  return newState;
};