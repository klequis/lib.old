import { path } from 'ramda'

/**
 * @name hasProp
 *
 * @description
 * See if an object contains a prop.
 *
 * @example
 * const person = { name: 'Joe', location { city: 'San Jose', state: 'CA' }}
 * // shallow
 * hasProp('name', person)
 * // => true
 *
 * // or deep
 * hasProp('location.city', person)
 * // => true
 * @param {String} prop
 * @param {Object} obj
 *
 * @returns {true/false}
 *
 */

const hasProp = (prop, obj) => {
  return path(prop.split('.'), obj) === undefined
    ? false
    : true
}

export default hasProp