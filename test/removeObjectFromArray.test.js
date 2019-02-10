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


describe('test removeObjectFromArray', () => {
  it('should remove based on field: first', () => {
    expect(removeObjectFromArray(testSet, 'first', 'Alice')).to.deep.equal(resultSet01)
  })
  it('should remove based on field: id', () => {
    expect(removeObjectFromArray(testSet, 'id', 103)).to.deep.equal(resultSet02)
  })
})

// describe.skip('Array', () => {
//   tests.forEach((sample) => {
//     it(sample.description, () => {
//       assert.equal(
//         removeObjectFromArray(sample.input.array, sample.input.field, sample.input.value), sample.result
//       )
//     })
//   })
// })

// describe('Array', () => {
//   shouldThrow.forEach((sample) => {
//     it(sample.description, () => {
//       // assert.equal(scaleFontSize(sample.input.size, sample.input.percent))
//       expect(
//         () => scaleFontSize(sample.input.size, sample.input.percent)
//       ).to.throw()
//     })
//   })
// })

