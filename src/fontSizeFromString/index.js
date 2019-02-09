/**
 * @name fontSizeFromString
 *
 * @description
 * !! not well thought out
 * Takes a string that is fontSize in 'rem' and a multiplier and
 * returns a new string with a new fontSize
 *
 *
 * @example
 * fontSizeFromString('2rem', 10)
 * // => '2.2rem'
 *
 * @param {String} str
 * @param {Number} percentChange
 */


export const fontSizeFromString = (str, percentChange) => {
  if (str.endsWith('rem')) {
    const idx = str.indexOf('rem', 0)
    const num = Number.parseFloat(str.substring(0, idx))
    return `${num * percentChange}rem`
  } else {
    // eslint-disable-next-line
    throw new Error("ERROR: Display1.fontSizeFromString: string must end in 'rem'")
  }
}