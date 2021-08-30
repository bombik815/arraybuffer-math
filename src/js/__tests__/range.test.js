import Magician from '../classes/magician';
import Daemon from '../classes/daemon';

test('stoned === true', () => {
  const hero = new Daemon('demon', 2, 100, true);
  expect(hero.attack).toBe(85);
});

test('stoned === true', () => {
  const hero = new Magician('mag', 2, 100, true);
  expect(hero.attack).toBe(85);
});

test('stoned === false', () => {
  const hero = new Daemon('demon', 2, 100);
  expect(hero.attack).toBe(90);
});

test('stoned === false', () => {
  const hero = new Magician('mag', 2, 100);
  expect(hero.attack).toBe(90);
});
