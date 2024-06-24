import React from 'react';
import { SkillsList } from './Constants';

const Skills = () => {


    return (
        <div className='flex flex-col items-center justify-center pt-[0px]'>
            <div className='flex flex-wrap gap-3 p-5 items-center justify-center'>
                {SkillsList.map((data, key) => (
                    <div className='w-36 h-36 border flex flex-col justify-center items-center rounded-md p-5 cursor-pointer hover:shadow-md transition-all' key={key}>
                        <img className='h-20 w-20 my-1' src={require(`../images/skills/${data.toLowerCase()}.svg`)} alt={data} />
                        <div className='w-full px-2 my-1'>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                        </div>
                        <p className='font-thin my-1 text-[14px]'>{data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills