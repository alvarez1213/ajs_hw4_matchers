// eslint-disable-next-line no-unused-vars
export const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'паладин', health: 200 },
  { name: 'ренжер', health: 25 },
  { name: 'друид', health: 50 },
];

export function sortByHealth(p) {
  return p.sort((a, b) => b.health - a.health);
}
