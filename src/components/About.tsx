import React from 'react';
import aboutSvg from '../images/about.svg'
import CertificateCard from './CertificateCard';
import { certifications, Certifications } from './Constants';

const About = () => {

    const certificationsList: Certifications[] = certifications;


    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:p-10 p-5 font-light'>

                <div className='lg:w-1/2 text-sm'>
                    <p>
                        Hi there! I'm Abhinav Jha, hailing from the vibrant town of <a href="https://en.wikipedia.org/wiki/Darbhanga" target='_blank' className='text-blue-500 underline font-thin'>Darbhanga</a> in Bihar. With a year of hands-on experience in software development, I have carved my niche as a full-stack developer.
                    </p>
                    <h1 className='text-[20px] font-bold text-slate-500 underline my-2'>
                        My Journey in Tech
                    </h1>
                    <p>
                        From crafting seamless user interfaces to building robust backend systems, my expertise spans across Java full-stack development, as well as the dynamic MERN and MEAN stacks. I’ve had the privilege of delivering numerous projects where best coding practices and efficient use of data structures and algorithms were paramount. My mantra? Keep it simple, keep it optimized.
                    </p>
                    <h1 className='text-[20px] font-bold text-slate-500 underline my-2'>
                        Academic Background
                    </h1>
                    <p>
                        I earned my B.Tech in Computer Science & Engineering (CSE) from the esteemed Bansal Group of Institutes in Bhopal, Madhya Pradesh. My academic journey laid a solid foundation, which I’ve built upon during my professional career.
                    </p>
                    <h1 className='text-[20px] font-bold text-slate-500 underline my-2'>
                        Professional Growth
                    </h1>
                    <p>
                        In just one year, I’ve navigated through a myriad of tech stacks and conquered various challenges, mastering the art of software development using the Software Development Life Cycle (SDLC). My quest for knowledge doesn’t stop here; I'm currently diving into the exciting world of WEB3, honing my skills in Solidity to stay ahead in the evolving tech landscape.
                    </p>
                    <h1 className='text-[20px] font-bold text-slate-500 underline my-2'>
                        Certifications and Beyond
                    </h1>
                    <p>
                        To further validate my skills, I’ve earned certifications in Java SE and Node.js. These achievements reflect my commitment to continuous learning and excellence in the field of software development.
                    </p>
                    <p>
                        Whether it's exploring new technologies or refining existing skills, I am passionate about my journey in tech and look forward to what the future holds.
                    </p>
                </div>

                <div className='lg:w-1/2 flex items-center justify-center'>
                    <img className='lg:w-[500px] w-[250px] lg:h-[500px] h-[250px]' src={aboutSvg} alt="" />
                </div>

            </div>

            <div className='flex flex-col justify-center items-center my-5'>
                <p className='text-[30px] font-serif text-slate-500'>Certifications</p>
                <div className='flex flex-wrap gap-3 my-5 items-center justify-center'>
                    {certificationsList.map((data) => (
                        <CertificateCard key={data.id} Certification={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About