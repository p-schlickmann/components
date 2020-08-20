import React from 'react'


class Comment extends React.Component {
    render () {
        return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" />
            </a>
            <div className="content">
            <a href="/" className="author">
                {this.props.profile}
            </a>
            <div className="metadata">
                <span className="date">Today at {this.props.time}</span>
            </div>
            <div className="text">{this.props.text}</div>
            </div>
        </div>
        )
    }
}

export default Comment
