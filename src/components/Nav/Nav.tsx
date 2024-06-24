import React from 'react';
import './Nav.css';
import { NAV_ITEMS } from '../Constants';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const changePath = (name: string) => {
        if (name.toLowerCase() === 'home') {
            navigate(`/`);
        } else {
            navigate(`/${name.toLowerCase()}`);
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        {NAV_ITEMS.map((data, key) => (
                            <li key={key}>
                                <p onClick={() => changePath(data)} className='hover:text-purple-500'>{data}</p>
                            </li>
                        ))}
                        <li>
                            <a className='bg-blue-500 text-white px-4 py-1 rounded-sm cursor-pointer' href='https://abhinav3254.hashnode.dev/' target='_blank'>Blogs</a>
                        </li>
                    </ul>
                    <h1 className="logo">Abhinav Jha</h1>
                </div>
            </nav>
        </div>
    )
}

export default Nav