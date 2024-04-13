import { useState, useEffect } from 'react'
import axios from 'axios'
import SingleBlog from './SingleBlog';

const MyBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            // Construct the headers object with the Authorization header
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            try {
                const response = await axios.get('/blog/my-blogs', { headers });
                setBlogs(response.data.content);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);
    return (
        <div>
            {blogs.map((data) => (
                <SingleBlog blog={data} key={data.id} />
            ))}
        </div>
    )
}

export default MyBlogs