import React from 'react';
import Sidebar from './sidebar.jsx';
import Notebooks from './notebooks.jsx';
import Notes from './notes.jsx';

var Evernote = React.createClass({
  getInitialState() {
    return {
      currently_viewing: 'notes',
      notebooks: [
        {
          name: 'my-notebook1',
          notes: [
            {
            name: 'my-note1',
            text: 'my-text1'
            }
          ]
        },
        {
          name: 'my-notebook2'
        },
        {
          name: 'my-notebook3',
        },
        {
          name: 'my-notebook4'
        },
        {
          name: 'my-notebook5'
        },
        {
          name: 'my-notebook6'
        },
        {
          name: 'my-notebook7'
        },
        {
          name: 'my-notebook8'
        }

      ] || []
    }
  },

  changeViewTo: function(view_for) {
    this.setState({currently_viewing: view_for})
  },

  createNotebook: function(notebook_name) {
    var notebooks = this.state.notebooks
    notebooks.push({ name: notebook_name })
    this.setState({notebooks: notebooks})
  },

  createNote: function(note_title, note_text, notebook_index) {
    var notebooks = this.state.notebooks
    notebooks[notebook_index].notes = notebooks[notebook_index].notes || []
    notebooks[notebook_index].notes.push({ name: note_title, text: note_text })
    this.setState({notebooks: notebooks})
  },

  render() {
    return (
      <div>
        <h3 className='row heading'>
          Welcome to EverNote
        </h3>
        <div className='row navbar'>
          Navbar
        </div>
        <div className='row app-body'>
          <div className='Col-md-2 sidebar'>
            <Sidebar changeViewTo={this.changeViewTo} />
          </div>
          <div className='col-md-10'>
            <div className='row listing-section'>
              {
                this.state.currently_viewing == 'notes' ?
                  <Notes data={this.state.notebooks} createNote={this.createNote} />
                :
                  <Notebooks data={this.state.notebooks} createNotebook={this.createNotebook} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Evernote;
