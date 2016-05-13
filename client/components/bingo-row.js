import React from 'react';
import BingoGrid from './bingo-grid';
class BingoRow extends React.Component {
  render() {
    const {num, bingo} = this.props;
    return <div className='bingoRow row'>
      <div className="col-xs-5">
      <h3 className="text-center">{bingo.get('title')}</h3>
        <BingoGrid side="left" num={num} bingo={bingo}/>
          <p>{bingo.get('instructions')}</p>
      </div>
      <div className="col-xs-5 col-xs-offset-1">  <h3 className="text-center">{bingo.get('title')}</h3>
      <BingoGrid side="right" num={num} bingo={bingo}/>
        <p>{bingo.get('instructions')}</p>
      </div>
    </div>;
  }
}
export default BingoRow;
