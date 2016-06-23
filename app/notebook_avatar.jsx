import React from 'react';

var NotebookAvatar = React.createClass({
  getInitialState: function(){
    return {
      notebook_name: this.props.data && this.props.data.name,
      change_notebook_name: false
    }
  },

  viewNotebook: function(e) {
    this.props.viewNotebook(this.props.data.id)
  },

  triggerNotebookEdit: function(e) {
    this.setState({change_notebook_name: true})
  },

  deleteNotebook: function(e) {
    this.props.deleteNotebook(this.props.data.id);
  },

  changeNotebookName: function(e) {
    this.props.editNotebookName(this.props.data.id, this.state.notebook_name)
    this.setState({change_notebook_name: false})
  },

  handleChange: function(e) {
    const name = e.target.name;
    this.setState({[`${name}`]: e.target.value});
  },

  handleKeyUp: function(e) {
    if(e.keyCode == 13) {
      this.changeNotebookName(e)
    } else {
      this.handleChange(e)
    }
  },

  render: function() {
    var note_count = (this.props.data.notes || []).length
    return (
      <div className='notebook-block' onDoubleClick={this.viewNotebook}>
        <i className='fa fa-edit pull-right fa-edit-notebook' onClick={this.triggerNotebookEdit}></i>
        <i className='fa fa-times pull-right fa-edit-notebook' onClick={this.deleteNotebook}></i>
        <div className='notebook-text pointer' onClick={this.triggerNotebookEdit}>
          {
            this.state.change_notebook_name ?
              <input className='input-field' name='notebook_name' onKeyUp={this.handleKeyUp} defaultValue={this.state.notebook_name} onBlur={this.changeNotebookName} autoFocus='true'/>
            :
              this.props.data.name
          }
          <br/>
          <span className='font-size14'>{note_count} Note{ note_count == 1 ? '' : 's' }</span>
        </div>
      </div>
    )
  }
});


export default NotebookAvatar;
