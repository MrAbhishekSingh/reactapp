import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const PostDetails = () => {
    const location = useLocation();
    const params = useParams();
    const { item } = location.state
    console.log(item);
    return (
        <>
            <p>id :{item.id}</p>
            <p>body :{item.body}</p>
            <p>title :{item.title}</p>
            <p>user_id : {item.user_id}</p>
        </>
    )
}

export default PostDetails