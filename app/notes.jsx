import React from 'react';
import SelectBox from './common_components/select_box.jsx'
import Note from './note.jsx'

var Notes = React.createClass({
  getInitialState: function(){
    return {
      get_note_name: false,
      note_name: '',
      selected_notebook_index: 0
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
    var note_name = this.state.note_name,
        selected_notebook_index = this.state.selected_notebook_index
    this.setState({note_name: ''})
    this.setState({selected_notebook_index: 0})
    this.setState({get_note_name: false})
    this.props.createNote(note_name, selected_notebook_index)
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

  render() {
    return (
      <div className='container-fluid'>
        <div className='row note-navbar'>
          {
            this.state.get_note_name ?
              ''
            :
              <button className='btn add-btn' onClick={this.getNoteName}> Add Note </button>
          }
        </div>
        <div className='row'>
          <div className='col-md-6'>
           { this.renderNotes() }
          </div>
          <div className='col-md-6 new-note-space'>
            {
              this.state.get_note_name ?
                <div pull-left>
                  <input value={this.state.note_name} name='note_name' placeholder='Enter name' onChange={this.handleChange}/>
                  &nbsp; <span className='white'>for</span> &nbsp;
                  <SelectBox className="select-list" name="notebooks" onValueChange={this.handleSelectBoxChange} defaultValue={0} rows={ this.props.data.map(function(notebook, index){ return [index, notebook.name] })} renderBlank={false}/>
                  &nbsp;&nbsp;&nbsp;
                  <input type='submit' onClick={this.createNote} value="Create Note" />
                </div>
              :
                ''
            }
          </div>
        </div>
      </div>
    )
  }
});


export default Notes;
