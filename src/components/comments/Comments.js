import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

function Comments() {
    let [comms, setComms] = useState([]);
    useEffect(() => {
        getComments().then(({data}) => setComms([...data]));
    })
    return (
        <div>
            {
                comms.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}

export default Comments;