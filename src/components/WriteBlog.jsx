import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const WriteBlog = () => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const goBack = () => {
        navigate('/home', { replace: true });
    }

    const publishBlog = async () => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Construct the headers object with the Authorization header
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        try {
            const response = await axios.post('/blog/post', { imageUrl, title, body }, { headers });
            toast.success(response.data.message);
        } catch (error) {
            toast.error(`Error publishing blog`);
        }
    };


    return (
        <div className='border p-5 m-2'>
            <header className='flex items-center justify-between'>
                <div onClick={goBack} className='bg-blue-500 flex w-fit text-white px-2 py-1 rounded-sm hover:cursor-pointer text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <p>Go Back</p>
                </div>
                <div className='flex items-center justify-end'>
                    <div className='flex bg-sky-400 px-2 py-1 text-white rounded-sm mx-2 items-center text-[10px] cursor-pointer' onClick={publishBlog}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <p>PUBLISH</p>
                    </div>
                    <div className='flex bg-yellow-700 px-2 py-1 text-white rounded-sm mx-2 items-center text-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                        <p>DRAFT</p>
                    </div>
                    <div className='flex bg-pink-600 px-2 py-1 text-white rounded-sm mx-2 items-center text-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p>SCHEDULE PUBLISH</p>
                    </div>
                    <div className='flex bg-blue-500 px-2 py-1 text-white rounded-sm mx-2 items-center text-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p>PREVIEW</p>
                    </div>
                </div>
            </header >
            <div className='mt-5 border border-gray-200 p-2'>
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className='outline-none border-none w-full' type="text" placeholder='Add link to image' />
            </div>
            {imageUrl.length > 2 && (
                <img className='h-20 w-40 mt-2 rounded-lg' src={imageUrl} alt="enter valid link" />
            )}
            <input className='outline-none border-none h-20 w-full text-black font-bold text-[30px]' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Article Title...' />
            <textarea className='w-full h-[500px] text-[25px] border-none outline-none' value={body} onChange={(e) => setBody(e.target.value)} placeholder='Type "/" for commands..... you can stretch this filed from bottom right side'></textarea>

        </div >
    )
}

export default WriteBlog