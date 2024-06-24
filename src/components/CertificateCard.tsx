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

    const handleClick = () => {
        window.open(Certification.link, '_blank');
    };

    return (
        <div>
            <div className='lg:w-[400px] w-[300px] h-[150px] lg:h-[200px] border flex flex-col items-center rounded-md justify-center hover:shadow-md transition-all cursor-pointer relative'>
                <p className='lg:text-[30px] text-blue-500 my-2 font-bold'>{Certification.name}</p>
                <p className='lg:text-[15px] text-green-500 my-2'>Hackerrank</p>
                <img className='w-[50%] h-[50%] absolute right-0 bottom-0 opacity-55' src={Hackerrank} alt="" />
                <button
                    className='bg-white text-black border border-black px-4 py-1 rounded-md my-2 hover:bg-green-500 hover:border-transparent hover:text-white'
                    onClick={handleClick}
                >
                    View
                </button>
            </div>
        </div>
    )
}

export default CertificateCard