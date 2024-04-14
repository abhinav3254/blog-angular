import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    return (
        <div>BlogDetails - {id}</div>
    )
}

export default BlogDetails