import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPosts} from "../../services/post.service";

function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    })
    return (
        <div>
            {
                posts.map(postItem => <Post key={postItem.id} item={postItem}/>)
            }
        </div>
    );
}

export default Posts;