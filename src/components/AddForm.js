import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
        this.addNote = props.addNote;
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.content !== '') {
            this.addNote(this.state);
            this.setState({ content: '' });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm} className='noteAddForm'>
                <label htmlFor='note-content'>New Note</label>
                <textarea name='text' onChange={this.onContentChange} value={this.state.content} />
                <button className="btn" type='submit'></button>
            </form>
        )
    }
}

export default AddForm;