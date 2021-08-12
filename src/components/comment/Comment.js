function Comment({item}) {
    return (
        <div>
            <div>
                {item.id} ({item.postId}) - {item.name}
            </div>
        </div>
    );
}

export default Comment;