/**
 * @name emailParts
 *
 * @function
 *
 * @description
 * Takes an email address and returns the name and domain parts as properties of an object & a change
 *
 * @param {string} email - an email address
 *
 * @returns {Object} - { name: String, domain: String }
 *
 * @example
 * emailParts('john.smith@gmail.com')
 *
 * // => { name: 'john.smith', domain: 'gmail.com'}
 *
 */

export const emailParts = (email) => {
  try {
    const idx = email.lastIndexOf('@')
    const name = email.slice(0, idx)
    const domain = email.slice(idx+1, email.length)
    return { name, domain }
  }
  catch (e) {
    /* istanbul ignore next */
    console.log('Error (emailParts)', e)
  }
}