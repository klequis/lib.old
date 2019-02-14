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

describe('updateObjectInArray() - success cases', () => {
  tests.forEach(test => {
    it(test.description, () => {
      expect(
        updateObjectInArray(test.array, test.idField, test.idFieldValue, test.newObject)
      ).to.deep.equal(test.result)
    })
  })
})

describe('updateObjectInArray()- fail cases', () => {
  it('missing parameters - should throw', () => {
    expect(
      () => updateObjectInArray(baseData, test.idField, { name: 'Jin' })
    ).to.throw()
  })
})