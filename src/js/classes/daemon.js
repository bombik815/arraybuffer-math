/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Daemon extends Range {
  constructor(name, distance, attack, stoned) {
    super(name, distance, attack);
    this.type = 'Daemon';
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }
}
