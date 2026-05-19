export const countTrueByPath = (obj, ...path) => {
  const value = path.reduce((acc, key) => acc?.[key], obj);

  if (Array.isArray(value)) return value.filter(v => v === true).length;
  if (value === true) return 1;
  return 0;
}