
export function isUndefined(vals) {
  for (let i=0; i<vals.length; i++) {
    const udef = vals[i] === undefined
    // console.log('udef', udef)
    if (udef) {
      return true
    }
  }
  return false
}
