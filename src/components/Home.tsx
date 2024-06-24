import React from 'react';
import mainImg from '../images/feeling-proud.svg'
import Connect from './Connect';

const Home = () => {
    return (
        <div className='w-full flex justify-center items-center p-10'>
            <div className='flex lg:flex-row flex-col justify-center items-center w-full h-full'>
                <div className='p-0 lg:p-10 h-full'>
                    <img className='lg:w-[500px] w-[250px] h-[250px] lg:h-[500px]' src={mainImg} alt="" />
                </div>
                <div className='p-0 lg:p-10 h-full flex flex-col justify-center'>
                    <div className='flex items-center mb-2'>
                        <div>
                            <p className='text-sm'>Hi, my name is</p>
                            <p className='text-[30px] lg:text-[60px]'>Abhinav <span className='font-thin text-purple-500'>Jha</span></p>
                            <p className='text-[20px] lg:text-[40px]'>Software Engineer</p>
                            <p className='text-[20px]'>Coding with a purpose 😌</p>
                        </div>
                    </div>
                    <Connect />
                </div>
            </div>
        </div>
    )
}

export default Home