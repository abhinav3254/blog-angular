import React from 'react'
import { useNavigate, } from 'react-router-dom';

const SingleBlog = ({ blog }) => {

    const navigate = useNavigate();


    const trimLength = (value) => {
        if (value.length > 150) {
            value = value.substring(0, 150) + '...';
        }
        return value;
    }

    const goToDetails = (id) => {
        console.log(id);
        navigate(`/blog/${id}`, { replace: true });
    };

    return (
        <div>
            <div className='w-2/4 border p-2 m-2 rounded-lg shadow-sm font-Ubuntu'>
                <div className='flex items-center'>
                    <img className='h-10 w-10 rounded-full' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685336714399/dzSAGuAXH.png?w=124&h=124&fit=crop&crop=faces&auto=compress,format&format=webp" alt="" />
                    <div className='mx-2 flex flex-col items-start justify-start'>
                        <p className='text-[14px]'>{blog.user.username}</p>
                        <p className='text-[10px]'>{blog.createdDate}</p>
                    </div>
                </div>
                <div className='flex cursor-pointer' onClick={() => goToDetails(blog.id)}>
                    <div className='w-full'>
                        <p className='text-black font-bold text-lg'>
                            {blog.title}
                        </p>
                        <p className='text-gray-400 font-light text-sm'>
                            {trimLength(blog.body)}
                        </p>
                    </div>
                    {!blog.imageUrl && (
                        <img
                            className='h-20 w-40 rounded-md mx-2 object-cover'
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1712904261788/4c1e0048-629d-46f6-bf0d-811e59220616.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                            alt=""
                        />
                    )}
                    {blog.imageUrl && (
                        <div className='h-24 w-60 rounded-md mx-2'>
                            <img
                                className='h-[100%] w-[100%] rounded-md mx-2 object-cover'
                                src={blog.imageUrl}
                                alt=""
                            />
                        </div>
                    )}
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex'>
                        <div className='flex mx-2 my-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                            <p className="text-[10px]">Likes</p>
                        </div>
                        <div className='flex mx-2 my-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <p className="text-[10px]">Discuss</p>
                        </div>
                        <div className='flex mx-2 my-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <p className="text-[10px]">{blog.blogView} reads</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='mx-2'>
                            <p className="text-[10px] bg-blue-100 py-1 px-2 rounded-xl">Javascript</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog