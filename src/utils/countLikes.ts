export function countLikes(count: number): string {
  const countFormated = new Intl.NumberFormat().format(count);
  return countFormated;
}
