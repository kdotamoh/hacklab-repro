/**
 * @param {number} number
 * @param {string} character
 *
 * @return []
 */
const loop = (number, character) => {
  /**
   * @param {string | Array<Number>} loop
   */
  let loop = character ? '' : []

  for (let index = 0; index < number; index++) {
    if (character) {
      loop = `${loop}${character}`
    } else {
      loop.push(index)
    }
  }

  console.log(loop)

  return loop
}

export default loop
