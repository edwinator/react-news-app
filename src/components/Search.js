import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {Button} from './Button';

export default class Search extends Component {
  componentDidMount() {
    this.textInput.focus();
  }
  render() {
    const {
      onChange, value, children, onSubmit,
    } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <h1 style={{fontWeight: 'bold'}}>{children}</h1>
            <hr style={{border: '2px solid black', width: '100px'}} />
            <div className="input-group">
              <input
                className="form-control width100 searchForm"
                type="text"
                onChange={onChange}
                value={value}
                ref={(input) => {
                  this.textInput = input;
                }}
              />
              <span className="input-group-btn">
                <Button className="btn btn-primary searchBtn" type="submit">
                  Search
                </Button>
              </span>
            </div>
          </FormGroup>
        </form>
      </div>
    );
  }
}
