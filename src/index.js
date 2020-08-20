import React from 'react'
import ReactDOM from 'react-dom'

import Comment from './components/Comment.js'
import ApprovalCard from './components/ApprovalCard.js'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment profile="Sam" text="This is a very nice blog!" time="18:00"/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
