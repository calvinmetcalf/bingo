import React from 'react';
import { connect } from 'react-redux';
import BingoRow from './bingo-row';
import Immutable from 'immutable';
class BingoPrintable extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.bingo.get('generation') !== this.props.bingo.get('generation');
  }
  render() {
    const {bingo} = this.props;
    if (bingo.get('generation') === 0) {
      return <div/>;
    }
    var out = new Array(bingo.get('count'));
    var i = -1;
    const words = new Immutable.Set(bingo.get('entries').split(',').map(item=>item.trim()).filter(item=>item));
    while (++i < bingo.get('count')) {
      out[i] = <BingoRow key={i} num={i} words={words} bingo={bingo}/>
    }
    return <div>{out}</div>;
  }
}

export default connect(state => ({
  bingo: state.bingo
}))(BingoPrintable);
