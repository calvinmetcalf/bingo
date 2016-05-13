import React from 'react';
import { connect } from 'react-redux';
import BingoRow from './bingo-row';
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
    while (++i < bingo.get('count')) {
      out[i] = <BingoRow key={i} num={i} bingo={bingo}/>
    }
    return <div><a id='forms'/><div>{out}</div></div>;
  }
}

export default connect(state => ({
  bingo: state.bingo
}))(BingoPrintable);
