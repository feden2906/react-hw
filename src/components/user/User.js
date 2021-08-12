import "./User.css"

function User({item: userItem}) {
    return (
        <div>
            <div className={'user'}>{userItem.id}. {userItem.name}</div>
        </div>
    );
}

export default User;