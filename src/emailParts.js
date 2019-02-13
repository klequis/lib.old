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
 *
 * @example
 * emailParts('john.smith@gmail.com')
 * // => { name: 'john.smith', domain: 'gmail.com'}
 *
 * @returns {Object} - { name: String, domain: String }
 */
export const emailParts = (email) => {
  console.log('**** emailParts')
  try {
    const idx = email.lastIndexOf('@')
    const name = email.slice(0, idx)
    const domain = email.slice(idx+1, email.length)
    return { name, domain }
  }
  catch (e) {
    console.log('Error (emailParts)', e)
  }
}

// @param {string} email - an email address