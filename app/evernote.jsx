import React from 'react';
import Sidebar from './sidebar.jsx';
import Notebooks from './notebooks.jsx';
import Notes from './notes.jsx';
import { Link, Router } from 'react-router';
import RouteHandler from 'react-router';

var Evernote = React.createClass({
  getInitialState() {
    return {
      currently_viewing: 'notes',
      notebooks: [
        {
          id: 1,
          name: 'my-notebook1',
          notes: [
            {
            name: 'my-note1',
            text: 'my-text1'
            }
          ]
        },
        {
          id: 2,
          name: 'my-notebook2'
        },
        {
          id: 3,
          name: 'my-notebook3',
        },
        {
          id: 4,
          name: 'my-notebook4'
        },
        {
          id: 5,
          name: 'my-notebook5'
        },
        {
          id: 6,
          name: 'my-notebook6'
        },
        {
          id: 7,
          name: 'my-notebook7'
        },
        {
          id: 8,
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
    notebooks.push({ name: notebook_name, id: $.now() })
    this.setState({notebooks: notebooks})
  },

  createNote: function(note_title, note_text, notebook_id) {
    var notebooks = this.state.notebooks
    var index = notebooks.findIndex(function(currentElement, currentIndex, array) {
      return(currentElement.id == notebook_id)
    });
    if(index >= 0) {
      notebooks[index].notes = notebooks[index].notes || [];
      notebooks[index].notes.push({ name: note_title, text: note_text });
    }
    this.setState({notebooks: notebooks})
  },

  editNotebookName: function(notebook_id, notebook_name) {
    var notebooks = this.state.notebooks
    var index = notebooks.findIndex(function(currentElement, currentIndex, array) {
      return(currentElement.id == notebook_id)
    });
    if(index >= 0) {
      notebooks[index].name = notebook_name;
    }
    this.setState({notebooks: notebooks})
  },

  deleteNotebook: function(notebook_id) {
    var notebooks = this.state.notebooks
    var index = notebooks.findIndex(function(currentElement, currentIndex, array) {
      return(currentElement.id == notebook_id)
    });
    if(index >= 0) {
      notebooks.splice(index, 1);
    }
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
            <Sidebar />
          </div>
          <div className='col-md-10'>
            <div className='row listing-section'>
              {this.props.children && React.cloneElement(this.props.children, {
                                                         data: this.state.notebooks,
                                                         createNote: this.createNote,
                                                         createNotebook: this.createNotebook,
                                                         editNotebookName: this.editNotebookName,
                                                         deleteNotebook: this.deleteNotebook
                                                        })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Evernote;
