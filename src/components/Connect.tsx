import React from 'react'
import { Connects } from './Constants';

const Connect = () => {
    return (
        <div className='flex'>
            <ul className='flex flex-wrap gap-2 py-2 items-center justify-start'>
                {Connects.map((data, key) => (
                    <a href={data.link} target='_blank' key={key} className='h-10 w-10'>
                        <img className='w-full h-full cursor-pointer overflow-hidden object-cover' src={require(`../images/${data.name.toLowerCase()}.svg`)} alt={data.name} />
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Connect