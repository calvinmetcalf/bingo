import qs from 'querystring';
import Immutable from 'immutable';
const defaultStuff = Immutable.fromJS({
  height: '5',
  width: '5',
  count: '50',
  generation: 0,
  instructions: 'blah blah',
  entries: 'alabama, balloon, cassandra, denmark, emerald, fiesta, galaxy, hair, inca, jargon, kimono, lazarus, marina, nectar, oliver, pagoda, quest, recycle, scarlet, tahiti, unicorn, vacuum, whiskey, xerxes, yogurt, zodiac',
  title: 'Bingo!'
});
export const getDefault = ()=> {
  var search = global.location.search;
  if (search[0] === '?') {
    search = search.slice(1);
  }
  var parsed = Immutable.fromJS(qs.parse(search)).delete('generation');
  return defaultStuff.merge(parsed);
}
const keys = ['height', 'width', 'instructions', 'entries', 'title'];
export const setQuery = state=>{
  var out = {};
  for (let key of keys) {
    if (state.get(key) !== defaultStuff.get(key)) {
      out[key] = state.get(key);
    }
  }
  global.history.pushState(out, '', '?' + qs.stringify(out));
}
