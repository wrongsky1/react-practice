import React from 'react'

function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div className="">{props.post.body}</div>
            </div>
            <div className="post__buttons">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem
