import { isUndefined } from '../src/util'

const expect = require('chai').expect

const arr1 = [1, 1, 1]
const arr2 = ['a', 'b', undefined, 'c']
const arr3 = ['a', 'b', 'c', 'd']

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
const updateObj01 = {
  id: 100,
  first: 'Joe',
  last: 'Smith',
  age: 11,
}

const arr4 = [baseData, 'first', 'Jane', updateObj01]


describe.skip('isUndefined()', () => {
  it('arr1 - should return false', () => {
    expect(
      isUndefined(arr1)
    ).to.be.false
  })
  it('arr2 - should return true', () => {
    expect(
      isUndefined(arr2)
    ).to.be.true
  })
  it('arr3 - should return false', () => {
    expect(
      isUndefined(arr3)
    ).to.be.false
  })
  it('arr4 - should return false', () => {
    expect(
      isUndefined(arr4)
    ).to.be.false
  })
})