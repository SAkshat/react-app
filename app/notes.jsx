import React from 'react';
import SelectBox from './common_components/select_box.jsx'
import Note from './note.jsx'

var Notes = React.createClass({
  getInitialState: function(){
    return {
      get_note_name: false,
      new_note_title: '',
      new_note_text: '',
      selected_notebook_index: 0,
    }
  },

  handleSelectBoxChange: function(selected_notebook_index) {
    this.setState({selected_notebook_index: selected_notebook_index})
  },

  handleChange: function(e) {
    const name = e.target.name;
    this.setState({[`${name}`]: e.target.value});
  },

  getNoteName: function(e) {
    this.setState({get_note_name: true})
  },

  createNote: function(e) {
    var new_note_title = this.state.new_note_title,
        selected_notebook_index = this.state.selected_notebook_index,
        new_note_text = this.state.new_note_text
    this.setState({new_note_title: ''})
    this.setState({new_note_text: ''})
    this.setState({selected_notebook_index: 0})
    this.setState({get_note_name: false})
    this.props.createNote(new_note_title, new_note_text, selected_notebook_index)
  },

  renderNotes: function() {
    var notes = [], index;
    for(index in this.props.data) {
      notes = notes.concat(this.props.data[index].notes || [])
    }
    return notes.map( function(note, index) {
        return (
          <div key={index}>
            <Note data={note} />
          </div>
        )
      }
    )
  },

  changeNewNoteText: function(e) {
    this.setState({new_note_text: e.target.innerHTML.replace(/$nbsp;/ig, '')})
  },

  changeNewNoteTitle: function(e) {
    this.setState({new_note_title: e.target.innerHTML.replace(/$nbsp;/ig, '')})
  },

  render() {
    return (
      <div className='container-fluid row'>
        <div className='col-md-6'>
          <div className='row note-navbar'>
          </div>
          <div className='row'>
           { this.renderNotes() }
          </div>
        </div>
        <div className='col-md-4'>
          <div className='row white'>
            New Note for <SelectBox className="select-list" name="notebooks" onValueChange={this.handleSelectBoxChange} defaultValue={0} rows={ this.props.data.map(function(notebook, index){ return [index, notebook.name] })} renderBlank={false}/>
            <button className='btn add-btn pull-right' onClick={this.createNote}> Create Note </button>
          </div>
          <div className='row new-note-title' id="textarea" contentEditable='true' onInput={this.changeNewNoteTitle} placeholder='Title' data-placeholder='Title'>
            {this.state.new_note_title.replace(/&nbsp;/, ' ')}
          </div>
          <div className='row new-note-text' id="textarea" contentEditable='true' onInput={this.changeNewNoteText} placeholder='Text' data-placeholder='Text'>
            {this.state.new_note_text}
          </div>
        </div>
      </div>
    )
  }
});


export default Notes;
