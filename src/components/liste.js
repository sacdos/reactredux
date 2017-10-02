import React, { Component } from 'react';
import { connect } from 'react-redux';

class Liste extends Component {
    renderComments()
    {
        return this.props.comments.map( comment => <li key={comment}>{comment}</li> );
    }

    render() {
        return(
            <ul>
                {this.renderComments()}
            </ul>
        );
    }
}

function mapStateToProps (state) {
    return ({
        comments: state.comments
    });
}

export default connect(mapStateToProps)(Liste);
