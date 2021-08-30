import Daemon from './classes/daemon';
import Magician from './classes/magician';

const demon = new Daemon('demon', 2, 100, true);
const mag = new Magician('mag', 2, 100);

console.log('app worked');
console.log(demon.attack);
console.log(mag.attack);
