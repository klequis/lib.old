import * as assert from 'assert'
import { updateObjectInArray } from '../src/updateObjectInArray'

const expect = require('chai').expect

const baseData = [
  {
    id: 100,
    first: 'Joe',
    last: 'Smith',
    age: 11,
  },
  {
    id: 101,
    first: 'Jane',
    last: 'Smith',
    age: 21,
  },
  {
    id: 102,
    first: 'Alice',
    last: 'Wang',
    age: 31,
  },
]



const tests = [
  {
    description: 'change id=101 age from 21 to 22',
    array: baseData,
    idField: 'id',
    idFieldValue: 101,
    newObject: {
      id: 101,
      first: 'Jane',
      last: 'Smith',
      age: 22,
    },
    result: [
      {
        id: 100,
        first: 'Joe',
        last: 'Smith',
        age: 11,
      },
      {
        id: 101,
        first: 'Jane',
        last: 'Smith',
        age: 22,
      },
      {
        id: 102,
        first: 'Alice',
        last: 'Wang',
        age: 31,
      },
    ]
  },
  {
    description: 'send only changes, not whole object',
    array: baseData,
    idField: 'id',
    idFieldValue: 102,
    newObject: {
      last: 'Wu',
      age: 35,
    },
    result: [
      {
        id: 100,
        first: 'Joe',
        last: 'Smith',
        age: 11,
      },
      {
        id: 101,
        first: 'Jane',
        last: 'Smith',
        age: 21,
      },
      {
        id: 102,
        first: 'Alice',
        last: 'Wu',
        age: 35,
      },
    ]
  },
]

describe('updateObjectInArray() should all pass', () => {
  tests.forEach(test => {
    it(test.description, () => {
      expect(
        updateObjectInArray(test.array, test.idField, test.idFieldValue, test.newObject)
      ).to.deep.equal(test.result)
    })
  })
})

// describe.skip('updateObjectInArray() errors', () => {
//   it('too few arguments', () => {
//     expect(
//       () => updateObjectInArray([], 'id', 101)
//     ).to.throw(Error, /4 arguments required/)
//   })
//   it('incorrect parameter(s)', () => {
//     expect(
//       () => updateObjectInArray('wrong', 'id', 101, { name: 'Joe' })
//     ).to.throw(Error, /Incorrect parameter(s). Expected (array, string, any, object)/)
//   })
// })
