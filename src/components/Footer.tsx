import React from 'react';
import Connect from './Connect';

const Footer = () => {
    return (
        <footer className='bg-gray-100 text-black py-6'>
            <div className='container mx-auto flex flex-col items-center'>
                <p className='text-lg mb-2'>Made with <span className='text-red-500'>&hearts;</span> by Abhinav Jha</p>

                <div className='flex space-x-4 mb-2'>
                    <Connect />
                </div>

                <div className='flex my-2'>
                    <div className='bg-blue-500 text-white px-4 py-1 mx-2 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><circle cx={8} cy={12.5} r={1.75}></circle><circle cx={4.5} cy={3.5} r={1.75}></circle><circle cx={11.5} cy={3.5} r={1.75}></circle><path d="M8 8.75v1.5m-3.25-4.5c0 3.5 6.5 3.5 6.5 0"></path></g></svg>
                        <a href='https://github.com/abhinav3254' target='_blank' className='ml-2'>FORK</a>
                    </div>
                    <div className='bg-blue-500 text-white px-4 py-1 mx-2 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"></path></svg>
                        <a href='https://github.com/abhinav3254' target='_blank' className='ml-2'>STAR</a>
                    </div>
                </div>

                <p className='text-sm mb-2'>© {new Date().getFullYear()} Abhinav Jha. All Rights Reserved.</p>

                {/* <p className='text-sm'>
                    <a href="mailto:your.email@example.com" className='hover:text-gray-400'>your@mail.com</a>
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;
