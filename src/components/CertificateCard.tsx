import React from 'react';
import Hackerrank from '../images/hackerrank.svg';


interface CertificationProps {
    Certification: {
        id: number;
        name: string;
        provider: string;
        link: string
    };
}
const CertificateCard = ({ Certification }: CertificationProps) => {
    return (
        <div>
            <div className='lg:w-[400px] w-[300px] h-[150px] lg:h-[200px] border flex flex-col items-center rounded-md justify-center hover:shadow-md transition-all cursor-pointer relative'>
                <p className='lg:text-[30px] text-blue-500 my-2 font-bold'>{Certification.name}</p>
                <p className='lg:text-[15px] text-green-500 my-2'>Hackerrank</p>
                <img className='w-[100px] h-[100px] absolute right-0 bottom-0 opacity-55' src={Hackerrank} alt="" />
                <a href={Certification.link} target='_blank' className='bg-white text-black border border-black px-4 py-1 rounded-md my-2 hover:bg-green-500 hover:border-transparent hover:text-white'>View</a>
            </div>
        </div>
    )
}

export default CertificateCard