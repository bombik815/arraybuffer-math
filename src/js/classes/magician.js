import Range from './range';

export default class Magician extends Range {
  constructor(name, distance, attack, stoned) {
    super(name, distance, attack);
    this.type = 'Magician';
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }
}
