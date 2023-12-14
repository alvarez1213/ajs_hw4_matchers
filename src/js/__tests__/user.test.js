import { players, sortByHealth } from '../user';

test('sorted 3 base heroes', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealth(heroes)).toEqual(result);
});

test('sorted extended heroes', () => {
  const heroes = players;
  const result = [
    { name: 'паладин', health: 200 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'друид', health: 50 },
    { name: 'ренжер', health: 25 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealth(heroes)).toEqual(result);
});

test('sort null heroes', () => {
  const heroes = [
    { },
  ];
  const result = [
    { },
  ];
  expect(sortByHealth(heroes)).toEqual(result);
});

test('sort one hero', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
  ];
  const result = [
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealth(heroes)).toEqual(result);
});

test('sort hero with negative health', () => {
  const heroes = [
    { name: 'мечник', health: -10 },
    { name: 'маг', health: -100 },
    { name: 'лучник', health: -80 },
  ];
  const result = [
    { name: 'мечник', health: -10 },
    { name: 'лучник', health: -80 },
    { name: 'маг', health: -100 },
  ];
  expect(sortByHealth(heroes)).toEqual(result);
});
