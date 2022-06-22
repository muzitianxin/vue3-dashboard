export function randomInt(max = 100, min = 0) {
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return parseInt((min + Math.random() * (max - min)).toFixed(0));
}
