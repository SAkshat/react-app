import React from 'react';

var NotebookAvatar = React.createClass({
  getInitialState: function(){
    return {
    }
  },

  render: function() {
    var note_count = (this.props.data.notes || []).length
    return (
      <div className='notebook-block'>
        <div className='notebook-text'>
          {this.props.data.name}
          <br/>
          <span className='font-size14'>{note_count} Note{ note_count == 1 ? '' : 's' }</span>
        </div>
      </div>
    )
  }
});


export default NotebookAvatar;
