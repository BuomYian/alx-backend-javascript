export default function iterateThroughObject(reportWithIterator) {
  const result = [...reportWithIterator].join(' | ');
  return result;
}
