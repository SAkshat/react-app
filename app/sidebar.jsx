import React from 'react';
import { Link } from 'react-router';

var SideBar = React.createClass({
  getInitialState: function(){
    return {
    }
  },

  render() {
    return (
    <div className='buttonlist'>
      <div className='button btn-block'>
        <Link to="/notebooks" className='button btn-block'>Notebooks</Link>
      </div>
      <div className='button btn-block'>
        <Link to="/notes" className='button btn-block'>Notes</Link>
      </div>
    </div>
    );
  }
});


export default SideBar;
