export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true; // Change to false to simulate a failure

      if (success) {
        resolve('Promise resolved successfully');
      } else {
        reject('Promise rejected with an error');
      }
    }, 2000);
  });
}
