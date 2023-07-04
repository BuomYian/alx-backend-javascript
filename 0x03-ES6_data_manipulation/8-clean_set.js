export default function cleanSet(set, startString) {
  const cleanedValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.substring(startString.length));
    }
  }
  return cleanedValues.join('-');
}
