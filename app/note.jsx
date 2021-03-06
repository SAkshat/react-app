import React from 'react';
import textTruncate from './utils/decorators.jsx'

var Note = React.createClass({
  getInitialState: function(){
    return {
    }
  },

  render: function() {
    return (
      <div className='note-block'>
        <div className='note-text'>
          {this.props.data.name}
          <br/>
          <span className='font-size14'>{textTruncate(this.props.data.text)}</span>
        </div>
      </div>
    )
  },

});


export default Note;
