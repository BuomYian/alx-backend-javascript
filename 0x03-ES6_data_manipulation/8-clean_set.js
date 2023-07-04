export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) =>
    value.startsWith(startString)
  );
  const cleanedString = filteredValues
    .map((value) => value.substring(startString.length))
    .join('-');
  return cleanedString;
}
