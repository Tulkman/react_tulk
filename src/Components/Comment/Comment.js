import React from 'react';

const Comment = (props) => {
    let {id, name, postId,title,body}=props
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h3>postId: {postId}</h3>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export default Comment;