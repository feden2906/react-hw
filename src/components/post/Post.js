function Post({item}) {
    return (
        <div>
            <div>{item.id} ({item.userId}) - {item.title}</div>
        </div>
    );
}

export default Post;