"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.split");

var _ramda = require("ramda");

/*
    takes a . delimeted path as string
    such as: 'cat.dog.camel'
    or: 'horse'
*/

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
  return (0, _ramda.path)(prop.split('.'), obj) === undefined ? false : true;
};

var _default = hasProp;
exports.default = _default;