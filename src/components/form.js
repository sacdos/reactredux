import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { comment: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
                <button action="submit">Submit</button>
            </form>
        );
    }
}


export default connect(null, actions)(Form);
