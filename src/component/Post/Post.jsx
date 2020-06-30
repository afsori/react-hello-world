import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post