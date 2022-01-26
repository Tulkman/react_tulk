import User from "../User/User";

const Users = ({users}) => {

    return (
        <div className={"tt"}>
            {users.map(item => <User key={item.id} users={item}/>)}
        </div>
    );
};

export default Users;