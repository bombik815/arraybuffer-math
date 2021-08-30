import Magician from '../classes/magician';
import Daemon from '../classes/daemon';

test('should log2 attack', () => {
  const hero = new Daemon('demon', 2, 100, true);
  expect(hero.attack).toBe(85);
});

test('should rangaAttack', () => {
  const hero = new Magician('mag', 2, 100, false);
  expect(hero.attack).toBe(90);
});

test('should stoned false', () => {
  const hero = new Daemon('demon', 2, 100);
  expect(hero.stoned).toBe(false);
});

test('should stoned true', () => {
  const hero = new Magician('mag', 2, 100, true);
  expect(hero.stoned).toBe(true);
});

test('attack base', () => {
  const hero = new Daemon('demon');
  expect(hero.attack).toBe(10);
});

test('attack base', () => {
  const hero = new Magician('mag');
  expect(hero.attack).toBe(10);
});
