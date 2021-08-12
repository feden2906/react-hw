import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, [])
    return (
        <div>
            {
                users.map(userItem => <User key={userItem.id} item={userItem}/>)
            }
        </div>
    );
}

export default Users;