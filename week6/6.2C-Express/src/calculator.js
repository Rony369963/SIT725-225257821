function toNumber(value, fieldName) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`${fieldName} must be a valid number`);
  }
  return parsed;
}

function add(a, b) {
  const numA = toNumber(a, 'a');
  const numB = toNumber(b, 'b');
  return numA + numB;
}

module.exports = {
  add,
  toNumber,
};
