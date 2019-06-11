import * as assert from 'assert'
import { hasProp } from '../src/hasProp'

const person = {
  firstName: 'Joe',
  age: 33,
}

const location = {
  name: 'location 1',
  type: {
    house: {
      number: 10
    }
  }
}

const tests = [
  {
    input: {
      prop: 'firstName',
      object: person,
    },
    result: true,
    description: 'should return true',
  },
  {
    input: {
      prop: 'type.house.number',
      object: location,
    },
    result: true,
    description: 'should return true',
  },
  {
    input: {
      prop: 'none',
      object: person,
    },
    result: false,
    description: 'should return true',
  },
  {
    input: {
      prop: 'type.house.none',
      object: location,
    },
    result: false,
    description: 'should return true',
  },
  {
    input: {
      prop: 'anything',
      object: {},
    },
    result: false,
    description: 'blank object should return false',
  }
]

describe('hasProp() should all pass', () => {
  tests.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(hasProp(sample.input.prop, sample.input.object), sample.result)
    })
  })
})
