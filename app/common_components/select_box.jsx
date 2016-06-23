import React from 'react';

var SelectBox = React.createClass({

  getInitialState: function(){
    return {
      value: this.props.defaultValue || '',
      state: ''
    }
  },

  renderOptions: function() {
    return this.props.rows.map(function(row) {
      return (
        <option value={row[0]} name={row[0]} key={row[0]}>{row[1]}</option>
      );
    });
  },

  renderBlank: function() {
    return (
      <option value='' name={this.props.blankValue} key=''>{this.props.blankName}</option>
    );
  },

  changeValue: function(e) {
    this.setState({value: e.target.value})
    this.props.onValueChange(e.target.value)
  },

  render: function() {
    return (
      <span>
        <select className={this.props.className} name={this.props.name} id={this.props.id} onChange={this.changeValue} defaultValue={this.state.value}>
          { this.props.renderBlank ? this.renderBlank() : '' }
          { this.renderOptions() }
        </select>
      </span>
    )}
})

export default SelectBox;

