import React from 'react';

const User = (props) => {
    const {id, name, username, email} = props;

    return (
        <div>
            <h2>id: {id}</h2>
            <h3>name: {name}</h3>
            <h3>username: {username}</h3>
            <p>email: {email}</p>
        </div>
    );
};

export default User;