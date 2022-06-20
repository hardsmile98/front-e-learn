export default (n: number, text_forms: Array<string>): string => {
  const absN = Math.abs(n) % 100;
  const n1 = n % 10;
  if (absN > 10 && absN < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 === 1) { return text_forms[0]; }
  return text_forms[2];
};
