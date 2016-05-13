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
    const {num, bingo, side} = this.props;
    var words = getWords(side, num, bingo);
    var width = parseInt(bingo.get('width'), 10);
    var height = parseInt(bingo.get('height'), 10);
    var rows = new Array(height);
    var i = -1;
    while (++i < height) {
      let row = new Array(width);
      let j = -1;
      while (++j < width) {
        row[j] = <td key={j}>{words[j + i * height]}</td>;
      }
      rows[i] = <tr key={i}>{row}</tr>
    }
    return <table className="table table-bordered">


    <tbody>{rows}</tbody>
    </table>;
  }
}
export default BingoGrid;
