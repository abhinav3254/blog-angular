import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.get('/blog/blog/' + id, { headers });
            setBlog(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const goBackButton = () => {
        navigate('/home', { replace: true });
    }

    return (
        <div>
            <div className='font-Ubuntu'>
                <header className='flex items-center justify-between'>
                    <div className='flex items-center bg-blue-500 text-white w-fit m-2 px-4 py-2 rounded-md' onClick={goBackButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p className='mx-1'>Back</p>
                    </div>
                    <div className='flex items-center m-2 bg-orange-500 px-4 py-2 text-white rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                        <p className='mx-1'>Bookmark</p>
                    </div>
                </header>

                {/* If blog is there then display it */}
                <div className='p-5 border m-2'>
                    {blog && <div className='flex flex-col'>
                        <div className='w-full h-96'>
                            {!blog.imageUrl && (
                                <img className='w-full h-full object-contain' src="https://placehold.co/600x400/EEE/31343C" alt="" />
                            )}
                            {(blog.imageUrl && blog.imageUrl != null || blog.imageUrl != undefined) && (
                                <img className='w-full h-full object-contain' src={blog.imageUrl} alt="" />
                            )}
                            <div className='flex flex-col my-2'>
                                <p className='font-bold text-[35px] my-1'>{blog.title}</p>
                                <p className='text-lg'>{blog.body}</p>
                            </div>

                            {/* view and comments and user desc section starts from here */}
                            <div className='flex items-center justify-between border px-4 my-2'>
                                <div className='flex items-center w-fit px-2 py-1'>
                                    <img className='rounded-full h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/4140/4140061.png" alt="" />
                                    <div className='mx-1'>
                                        <p className='font-bold'>{blog.user.username}</p>
                                        <p className='text-[10px]'>{blog.createdDate}</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <p className='text-[12px]'>{blog.blogView}</p>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

                {/* If blog is not there or async call might take time so for that use this */}
                {!blog && (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default BlogDetails