import React from 'react';
import getWords from '../get-words';
import Immutable from 'immutable';

class BingoGrid extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.num !== this.props.num) {
      return true;
    }
    if (nextProps.side !== this.props.side) {
      return true;
    }
    if (Immutable.is(nextProps.bingo, this.props.bingo)) {
      return false;
    }
    if (!Immutable.is(nextProps.words, this.props.words)) {
      return true;
    }
    if (nextProps.bingo.get('height') !== this.props.bingo.get('height')) {
      return true;
    }
    if (nextProps.bingo.get('width') !== this.props.bingo.get('width')) {
      return true;
    }
    if (nextProps.bingo.get('entries') !== this.props.bingo.get('entries')) {
      return true;
    }
    return false;
  }
  render() {
    const {num, bingo, words, side} = this.props;
    var width = parseInt(bingo.get('width'), 10);
    var height = parseInt(bingo.get('height'), 10);
    var wordArray = getWords(side, num, width, height, words);
    return <table className="table table-bordered">
    <tbody>{wordArray.map((row, i)=>
      <tr key={i}>{row.map(word=>
        <td key={word}>{word}</td>
      )}</tr>)}</tbody>
    </table>;
  }
}
export default BingoGrid;
