// import { removeObjectFromArray } from './removeObjectFromArray'

const removeObjectFromArray = require('./removeObjectFromArray')


const testArray01 = [
  {
    first: 'Joe',
    last: 'Smith'
  },
  {
    first: 'Jane',
    last: 'Smith'
  },
  {
    first: 'Alice',
    last: 'Wang'
  },
  {
    first: 'Bill',
    last: 'Wang'
  },
]


const tests = [
  {
    input: {
      array: testArray01,
      field: 'first',
      value: 'Alice'
    } ,
    result: {
      first: 'Alice',
      last: 'Wang'
    },
    description: 'should return Alice Wang',
  },
]

removeObjectFromArray(testArray01, 'first', 'Alice')