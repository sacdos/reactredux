import React, { Component } from 'react';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event)
    {
        this.setState({ term: event.target.value });
    }
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={ (e) => this.handleSubmit(e) }>
                <input value={this.state.term} onChange={this.handleChange} />
                <button action="submit">Submit</button>
            </form>
        );
    }
}

export default Search;
