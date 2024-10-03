/**
 * Create a guardrail for a math function.
 *
 * @param {Function} mathFunction - The math function to guard.
 * @returns {Array} An array containing the result of the math function and a success message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
