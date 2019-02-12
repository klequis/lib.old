import * as assert from 'assert'
import { indexOfObjectInArray } from '../src/indexOfObjectInArray'

const expect = require('chai').expect

const testSet = [
  {
    id: 100,
    first: 'Joe',
    last: 'Smith'
  },
  {
    id: 101,
    first: 'Jane',
    last: 'Smith'
  },
  {
    id: 102,
    first: 'Alice',
    last: 'Wang'
  },
  {
    id: 103,
    first: 'Bill',
    last: 'Wang'
  },
]

const resultSet01 = [
  {
    id: 100,
    first: 'Joe',
    last: 'Smith'
  },
  {
    id: 101,
    first: 'Jane',
    last: 'Smith'
  },
  {
    id: 103,
    first: 'Bill',
    last: 'Wang'
  },
]

const resultSet02 = [
  {
    id: 100,
    first: 'Joe',
    last: 'Smith'
  },
  {
    id: 101,
    first: 'Jane',
    last: 'Smith'
  },
  {
    id: 102,
    first: 'Alice',
    last: 'Wang'
  },
]


describe('indexOfObjectInArray() should all pass', () => {
  it('should remove based on field: first', () => {
    expect(indexOfObjectInArray(testSet, 'first', 'Alice')).to.equal(2)
  })
  it('should remove based on field: id', () => {
    expect(indexOfObjectInArray(testSet, 'id', 103)).to.equal(3)
  })
})
