export const emailParts = (email) => {
  const idx = email.lastIndexOf('@')
  const name = email.slice(0, idx)
  const domain = email.slice(idx+1, email.length)
  return { name, domain }
}