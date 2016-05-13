import createHash from 'create-hash';
import chacha from 'chacha';
export default (side, num, bingo) => {
  var total = bingo.get('width') * bingo.get('height');
  var arr = bingo.get('entries').split(',').map(item=>item.trim()).filter(item=>item);
  var temp = new Set(arr);
  arr = [...temp];
  arr.sort();
  shuffle(arr, side, num);
  return arr.slice(0, total);
}
function shuffle(arr, side, num) {
  var seed = createHash('sha384').update(side).update(num.toString()).digest();
  var rng = randomizer(seed);
  var currentIndex = arr.length;

  // While there remain elements to shuffle...
  while (currentIndex) {

    // Pick a remaining element...
    let randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    let temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

function randomizer(seed) {
  var key = seed.slice(0, 32);
  var iv = seed.slice(-12);
  var cipher=chacha.createCipher(key, iv);
  var zeros = Buffer.alloc(4);
  return ()=>{
    var buf = cipher.update(zeros);
    return buf.readUInt32LE(0)/0x100000000;
  }
}
