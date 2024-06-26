import React from 'react';
import { projectsList } from './ProjectsData';


const Projects = () => {

    const projects = projectsList;

    return (
        <div>
            {projects.map((data) => (
                <div className='p-2' key={data.id}>
                    <div className='flex lg:flex-row flex-col p-2 lg:p-5 border'>
                        <div className='h-[200px] w-full lg:w-[800px] lg:h-[300px]'>
                            <img className='h-full w-full object-contain' src={data.img} alt="" />
                        </div>
                        <div className='w-full p-5 flex flex-col items-center lg:items-start justify-start'>
                            <h1 className='text-[25px] lg:text-[40px] font-bold text-blue-500'>{data.name}</h1>
                            <div className='flex flex-col items-center justify-center lg:items-start'>
                                <p className='text-[20px] lg:text-[30px] font-bold text-blue-500'>Tech Stack Used</p>
                                <ul className='flex flex-wrap gap-2 justify-center'>
                                    {data.tech.map((name, key) => (
                                        <li className='text-sm bg-green-500 text-white px-2 py-1 rounded-sm shadow-md' key={key}>{name}</li>
                                    ))}
                                </ul>
                                <div className='my-2'>
                                    <p className='text-[12px] lg:text-[20px] font-thin'>
                                        {data.desc}
                                    </p>
                                </div>
                                <div className='my-2'>
                                    <a href={data.link} target='_blank' className='flex items-center justify-center bg-black rounded-md shadow-md px-2 py-1 text-white cursor-pointer'>
                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            }
            <div className='flex justify-center items-center my-5'>
                <a href='https://github.com/abhinav3254' target='_blank' className='bg-blue-500 px-5 py-2 text-white shadow-lg'>View More</a>
            </div>
        </div >
    )
}

export default Projects