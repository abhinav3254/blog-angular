import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';
import Nav from './Nav';
import axios from 'axios';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isStartPage, setIsStartPage] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (pageNumber) => {
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        try {
            if (pageNumber === undefined || pageNumber === null)
                pageNumber = 0;
            const response = await axios.get(`/blog?page=${parseInt(pageNumber)}`, { headers });
            setBlogs(response.data.content);
            // console.log(pageNumber, 'is page number');
            if (response.data.totalPages === pageNumber + 1) setIsLastPage(true); else {
                setIsLastPage(false);
            }
            if (pageNumber === 0) { setIsStartPage(true); } else { setIsStartPage(false); }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };


    const nextPage = () => {
        const nextPageNumber = page + 1;
        setPage(nextPageNumber);
        fetchData(nextPageNumber);
    };

    const previousPage = () => {
        const nextPageNumber = page - 1;
        setPage(nextPageNumber);
        fetchData(nextPageNumber);
    }

    return (
        <div className=''>
            <Nav />
            {blogs.map((data) => (
                <SingleBlog blog={data} key={data.id} />
            ))}
            <div className='flex items-center justify-center'>
                {/* prev page */}
                {!isStartPage && (
                    <svg onClick={previousPage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4 my-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>
                )}
                {/* next page */}
                {!isLastPage && (
                    <svg onClick={nextPage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4 my-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                )}
            </div>
        </div>
    )
}

export default Home