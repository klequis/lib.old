"use strict";

const indexOfObjectInArray = (arr, _id) => {
  return arr.findIndex(i => i._id === _id);
};