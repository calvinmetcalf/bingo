import React from 'react';
import { connect } from 'react-redux'
import {updateValue, rerender} from '../actions';
import { FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
class BingoForm extends React.Component {
  render() {
    const {dispatch, bingo} = this.props;
    const createChange = name=>e=>dispatch(updateValue({
      field: name,
      value: e.target.value
    }))
    var parsedList = new Set(bingo.get('entries').split(',').map(item=>item.trim()).filter(item=>item));
    var fullSize = parseInt(bingo.get('width'), 10) * parseInt(bingo.get('height'), 10);
    return <form className="form-horizontal print-hide" onSubmit={
      e=>{
        e.preventDefault();
        dispatch(rerender())
      }
    }>
<fieldset>

<legend>Bingo Card Generator</legend>

<FormGroup controlId="entriesControl">
  <Col md={4} componentClass={ControlLabel}>Words (comma separated)</Col>
  <Col md={6}>
    <FormControl componentClass="textarea"  rows="5" onChange={createChange('entries')} value={bingo.get('entries')}  name="entries"></FormControl>
  </Col>
</FormGroup>

<FormGroup controlId="InstructionsControl">
  <Col md={4} componentClass={ControlLabel}>Instructions</Col>
  <Col md={6}>
    <FormControl componentClass="textarea" onChange={createChange('instructions')} rows="5" value={bingo.get('instructions')} name="instructions"></FormControl>
  </Col>
</FormGroup>
<FormGroup controlId="widthControl">
  <Col md={4} componentClass={ControlLabel}>Width</Col>
  <Col md={2}>
    <FormControl type="number" onChange={createChange('width')} value={bingo.get('width')} name="width"></FormControl>
  </Col>
</FormGroup>
<FormGroup controlId="heightControl">
  <Col md={4} componentClass={ControlLabel}>Height</Col>
  <Col md={2}>
    <FormControl type="number" onChange={createChange('height')} value={bingo.get('height')} name="height"></FormControl>
  </Col>
</FormGroup>
<FormGroup controlId="titleControl">
  <Col md={4} componentClass={ControlLabel}>Title</Col>
  <Col md={2}>
    <FormControl type="text" onChange={createChange('title')} value={bingo.get('title')} name="title"></FormControl>
  </Col>
</FormGroup>
<FormGroup controlId="pageControl">
  <Col md={4} componentClass={ControlLabel}>Number of Pages (2 cards per page)</Col>
  <Col md={2}>
    <FormControl type="number" onChange={createChange('count')} value={bingo.get('count')} name="count"></FormControl>
  </Col>
</FormGroup>
</fieldset>
<Button  bsStyle="primary" bsSize="large" block className="btn btn-lg btn-primary btn-block" disabled={fullSize > parsedList.size} type="submit">{fullSize <= parsedList.size ? <span>Generate Cards</span> : <span>Not Enough Words choose <span>{fullSize - parsedList.size}</span> more unique words</span>}</Button>
</form>;
  }
}

export default connect(state => ({
  bingo: state.bingo
}))(BingoForm);
