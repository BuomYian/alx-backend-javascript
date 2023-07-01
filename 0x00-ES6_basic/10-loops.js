export default function appendToEachValue(array, appendString) {
  const updatedArray = [];
  for (const value of array) {
    updatedArray.push(appendString + value);
  }

  return updatedArray;
}
