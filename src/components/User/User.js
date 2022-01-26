import React from "react";

const User = (props) => {
    const {users: {id, name, username, email}} = props
    return (
        <div>
            {id}. {name} {username} --- {email}
        </div>
    );
};

export default User;