/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Magician extends Range {
  constructor(name, distance, attack) {
    super(name, distance, attack);
    this.type = 'Magician';
  }
}
