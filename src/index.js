import React from 'react'
import ReactDOM from 'react-dom'

import Comment from './components/comment.js'


const App = () => {
    return (
        <div className="ui container comments">
            <Comment profile="Sam" text="This is a very nice blog!" time="18:00"/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
