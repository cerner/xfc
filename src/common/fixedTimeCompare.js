/**
* Comparison algorithm to prevent timing attacks.
* See: https://en.wikipedia.org/wiki/Timing_attack
* @param {String} v1 - The first value to compare
* @param {String} v2 - The second value to compare
* @return {boolean} True if the strings are equivalent, false otherwise.
*/
export default (v1, v2) => {
  const compare = (value, _, index) => (
    value | (v1.charCodeAt(index) ^ v2.charCodeAt(index)) // eslint-disable-line no-bitwise
  );

  return v1.split('').reduce(compare, v1.length ^ v2.length) < 1; // eslint-disable-line no-bitwise
};
