/**
 * Return a promise that resolves or rejects based on the success parameter.
 *
 * @param {Boolean} success - Whether the API call is successful.
 * @returns {Promise} A promise that resolves with a success object or rejects with an error object.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
