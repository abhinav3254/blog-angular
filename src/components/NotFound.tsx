import React from 'react';
import notfound from '../images/notfound.svg';

const NotFound = () => {
    return (
        <div>
            <div className='flex items-center justify-center p-10 relative'>
                <a href='/' className='bg-red-500 text-white px-5 py-2 rounded-md absolute bottom-10'>Go Back</a>
                <img className='w-screen h-[400px] lg:w-[500px] lg:h-[500px]' src={notfound} alt="" />
            </div>
        </div>
    )
}

export default NotFound