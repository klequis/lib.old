import * as assert from 'assert'
import { emailParts } from '../src/emailParts'

const expect = require('chai').expect

const testSet = [
  {
    input: 'joe@joe.com',
    result: { name: 'joe', domain: 'joe.com' },
  },
  {
    input: 'joseph@camel.back.com',
    result: { name: 'joseph', domain: 'camel.back.com' },
  },
  {
    input: 'joe@smith@joe.com',
    result: { name: 'joe@smith', domain: 'joe.com' },
  },
  {
    input: 'joe.a.smith@joe.com',
    result: { name: 'joe.a.smith', domain: 'joe.com' },
  },
  {
    input: 'j1.o2.e3@joe.123.com',
    result: { name: 'j1.o2.e3', domain: 'joe.123.com' },
  },
]

describe('emailParts() should all pass', () => {
  testSet.forEach((test) => {
    it(`input ${test.input}`, () => {
      expect(emailParts(test.input)).to.deep.equal(test.result)
    })
  })
})