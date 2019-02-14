import { path } from 'ramda'

/**
 * @name hasProp
 *
 * @function
 *
 * @description
 * See if an object contains a prop.
  *
 * @param {string} prop - the name of a prop
 * @param {Object} obj - the object to look in
 *
 * @returns {true|false}
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
 *
 */

export const hasProp = (prop, obj) => {
  return path(prop.split('.'), obj) === undefined
    ? false
    : true
}