import * as assert from 'assert'
import { scaleFontSize } from '../src/scaleFontSize'

const expect = require('chai').expect

const tests = [
  {
    input: {
      size: '15rem',
      percent: 20,
    } ,
    result: '18rem',
    description: 'should return 18rem',
  },
  {
    input: {
      size: '12rem',
      percent: 15,
    } ,
    result: '13.8rem',
    description: 'should return 13.8rem',
  },
  {
    input: {
      size: '15em',
      percent: 20,
    } ,
    result: '18em',
    description: 'should return 18em',
  },
  {
    input: {
      size: '12em',
      percent: 15,
    } ,
    result: '13.8em',
    description: 'should return 13.8em',
  },
]

const shouldThrow = [
  {
    input: {
      size: '15px',
      percent: 20,
    },
    result: Error('ERROR (scaleFontSize): fontSize unit must be "em" or "rem" '),
    description: 'throw',
  },
]

describe('scaleFontSize() should all pass', () => {
  tests.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(scaleFontSize(sample.input.size, sample.input.percent), sample.result)
    })
  })
})

describe('scaleFontSize() should all throw', () => {
  shouldThrow.forEach((sample) => {
    it(sample.description, () => {
      // assert.equal(scaleFontSize(sample.input.size, sample.input.percent))
      expect(
        () => scaleFontSize(sample.input.size, sample.input.percent)
      ).to.throw()
    })
  })
})

