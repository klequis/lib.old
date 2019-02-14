/**
 * @name scalFontSize
 *
 * @function
 *
 * @description
 * Takes a fontSize with unit of 'rem' or 'em' and a multiplier and returns a new string with a new fontSize
 *
 * @param {String} size - the fontSize with unit - '15rem'
 * @param {Number} percentChange - number > 1
 *
 * @returns
 * New fontSize as string
 *
 * @example
 * scaleFontSize('2rem', 10)
 * // => '2.2rem'
 *
 */

const endsInRem = str => str.substring(str.length-3, str.length) === 'rem'
const endsInEm = str => str.substring(str.length-2, str.length) === 'em'

export const scaleFontSize = (size, percent) => {
  let unit = undefined
  if (endsInRem(size)) {
    unit = 'rem'
  } else if (endsInEm(size)) {
    unit = 'em'
  } else {
    throw new Error('ERROR (scaleFontSize): fontSize unit must be "em" or "rem" ')
  }
  const idx = size.indexOf(unit, 0)
  const numSize = Number.parseFloat(size.substring(0, idx))
  return `${numSize + numSize * percent / 100}${unit}`
}