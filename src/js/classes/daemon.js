/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Daemon extends Range {
  constructor(name, distance, attack) {
    super(name, distance, attack);
    this.type = 'Daemon';
  }
}
