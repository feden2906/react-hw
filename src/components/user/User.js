function User({name, surname, age, info, photo}) {
    return (
        <div className={'user'}>
            <h3>{name} {surname}</h3>
            <p>Age: {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
}

export default User;