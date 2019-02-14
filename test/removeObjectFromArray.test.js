import * as assert from 'assert'
import { removeObjectFromArray } from '../src/removeObjectFromArray'

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


describe('removeObjectFromArray() should all pass', () => {
  it('should remove based on field: first', () => {
    expect(removeObjectFromArray(testSet, 'first', 'Alice')).to.deep.equal(resultSet01)
  })
  it('should remove based on field: id', () => {
    expect(removeObjectFromArray(testSet, 'id', 103)).to.deep.equal(resultSet02)
  })
  it('should return false because value not found', () => {
    expect(removeObjectFromArray(testSet, 'id', 200)).to.be.false
  })
  it('should return false because field not found', () => {
    expect(removeObjectFromArray(testSet, 'zzz', 101)).to.be.false
  })
})

