import React from 'react';

const Post = (props) => {
    const {post} = props
    return (
        <div className={'post'}>
            <h1>userId: {post.userId}(id: {post.id})</h1>
            <h2>title: {post.title}</h2>
            <p>body: {post.body}</p>
        </div>
    );
};

export default Post;