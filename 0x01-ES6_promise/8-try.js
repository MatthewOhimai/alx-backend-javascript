/**
 * Divide the numerator by the denominator.
 *
 * @param {Number} numerator - The numerator.
 * @param {Number} denominator - The denominator.
 * @throws {Error} If the denominator is 0.
 * @returns {Number} The result of the division.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
