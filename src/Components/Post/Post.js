import React from 'react';

const Post = (props) => {
    let {id, userId,title,body}=props
    return (
        <div>
            <h2>id: {id}</h2>
            <h3>userId: {userId}</h3>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export default Post;