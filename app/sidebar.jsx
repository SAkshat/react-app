import React from 'react';

var SideBar = React.createClass({
  getInitialState: function(){
    return {
    }
  },

  changeViewTo: function(e) {
    this.props.changeViewTo(e.target.name)
  },

  render() {
    return (
    <div className='buttonlist' onClick={this.changeViewTo}>
      <button className='button btn-block' name='notes'>
        Notes
      </button>
      <button className='button btn-block' name='notebooks'>
        Notebooks
      </button>
    </div>
    );
  }
});


export default SideBar;
