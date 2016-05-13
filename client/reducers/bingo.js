import {getDefault, setQuery} from '../get-query';
const init = getDefault();

export default function (state = init, action){
  switch(action.type) {
  case 'update-value':
    return state.set(action.payload.field, action.payload.value);
  case 'rerender':
    setQuery(state);
    return state.set('generation', state.get('generation') + 1);
  default:
    return state;
  }
}
