import React from 'react';
import NotebookAvatar from './notebook_avatar.jsx'
import { browserHistory } from 'react-router'

var Notebooks = React.createClass({
  getInitialState: function(){
    return {
      get_notebook_name: false,
      notebook_name: ''
    }
  },

  handleChange: function(e) {
    const name = e.target.name;
    this.setState({[`${name}`]: e.target.value});
  },

  getNotebookName: function(e) {
    this.setState({get_notebook_name: true})
  },

  createNotebook: function(e) {
    var notebook_name = this.state.notebook_name
    this.setState({notebook_name: ''})
    this.setState({get_notebook_name: false})
    this.props.createNotebook(notebook_name)
  },

  viewNotebook: function(notebook_id) {
    browserHistory.push('/notebooks/' + notebook_id)
  },

  renderNotebooks: function() {
    var notebooks = this.props.data || [],
        self = this;
    return notebooks.map( function(notebook, index) {
        return (
          <div key={notebook.id}>
            <NotebookAvatar data={notebook} viewNotebook={self.viewNotebook} editNotebookName={self.props.editNotebookName} deleteNotebook={self.props.deleteNotebook} />
          </div>
        )
      }
    )
  },

  render() {
    return (
      <div className='container-fluid'>
        <div className='row notebook-navbar'>
          {
            this.state.get_notebook_name ?
              <div>
                <input value={this.state.notebook_name} name='notebook_name' placeholder='Enter name' onChange={this.handleChange}/>
                &nbsp;&nbsp;&nbsp;
                <input type='submit' onClick={this.createNotebook} value="Create Notebook" />
              </div>
            :
              <button className='btn add-btn' onClick={this.getNotebookName}> Add Notebook </button>
          }
        </div>
        <div className='row'>
          { this.renderNotebooks() }
        </div>
      </div>
    )
  }
});


export default Notebooks;
