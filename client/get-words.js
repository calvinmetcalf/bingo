import xorshift from 'xorshift';
import Immutable from 'immutable';

export default (side, num, width, height, words) => {
  var total = width * height
  var arr = [...words];
  arr.sort();
  return shuffle(new Immutable.List(arr), side, num, width, height);
}
function shuffle(list, side, num, width, height) {
  var seed = [num * 0x1000, side === 'right' ? 0xc000 : 0x4000, num, 0x600 * num];
  var rng = xorshift.constructor(seed);
  var i = 40;
  while (--i) {
    rng.randomint();
  }
  var out = new Immutable.List();
  var row = new Immutable.List();
  while (out.size < height) {
    let randomIndex = Math.floor(rng.random() * list.size);
    row = row.push(list.get(randomIndex));
    if (row.size === width) {
      out = out.push(row);
      row = new Immutable.List();
    }
    list = list.delete(randomIndex);
  }
  return out;
}
