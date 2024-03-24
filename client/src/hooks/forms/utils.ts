export const compareStringRecords = <
  A extends Record<string, unknown>,
  B extends Record<string, unknown>
>(
  a: A,
  b: B
) => {
  const entriesOfA = Object.entries(a);
  const entriesOfB = Object.entries(b);

  if (entriesOfA.length !== entriesOfB.length) return false;

  for (const [keyOfA, valueOfA] of entriesOfA) {
    const valueOfB = b[keyOfA];
    if (valueOfA !== valueOfB) return false;
  }

  return true;
};
