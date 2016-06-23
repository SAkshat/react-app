import React from 'react';
import NoteAvatar from './note_avatar.jsx'

var Notes = React.createClass({
  getInitialState: function(){
    var current_notebook = this.getCurrentNotebook()
    return {
      get_note_name: false,
      new_note_title: '',
      new_note_text: '',
      selected_notebook_index: this.props.params.notebook_id,
      show_title_placeholder: true,
      current_notebook: current_notebook
    }
  },

  getCurrentNotebook: function() {
    var notebook_id = this.props.params.notebook_id,
        current_notebook = '',
        notebooks = this.props.data || [],
        index = notebooks.findIndex(function(currentElement, currentIndex, array) {
                  return(currentElement.id == notebook_id)
                });
    return notebooks[index]
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
    var notes = this.state.current_notebook.notes || [];
    return notes.map( function(note, index) {
        return (
          <div key={index}>
            <NoteAvatar data={note} />
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

  hideTitlePlaceholders: function(e) {
    this.setState({show_title_placeholder: false})
  },

  showTitlePlaceholders: function(e) {
    console.log(this.state.new)
    if(this.state.new_note_title.length > 0) {
      this.setState({show_title_placeholder: false})
    } else {
      this.setState({show_title_placeholder: true})
    }
  },

  render() {
    var title = this.state.new_note_title,
        text = this.state.new_note_text;

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
            <button className='btn add-btn pull-right' onClick={this.createNote}> Create Note </button>
          </div>
          <div className='row new-note-title placeholder-title' id="textarea" contentEditable='true' onInput={this.changeNewNoteTitle}>
            {title.replace(/&nbsp;/, ' ')}
          </div>
          <div className='row new-note-text placeholder-text' id="textarea" contentEditable='true' onInput={this.changeNewNoteText}>
            {text.replace(/&nbsp;/, ' ')}
          </div>
        </div>
      </div>
    )
  }
});


export default Notes;
