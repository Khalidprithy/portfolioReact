import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const NavBar = () => {

    return (
        <div className="navbar h-20 sticky top-0 z-50 ease-in-out duration-300 bg-primary">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-8 p-2 shadow bg-accent rounded-box w-52">
                        <li className='text-base-100 text-xl'><Link to='/home'>Home</Link></li>
                        <li className='text-base-100 text-xl'><Link to='/projects'>Projects</Link></li>
                        <li className='text-base-100 text-xl'><Link to='/about'>About</Link></li>
                        <div className='flex'>
                            <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer"> <AiFillGithub className='text-4xl text-black mr-2 block md:hidden'></AiFillGithub>
                            </a>
                            <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer"> <AiFillLinkedin className='text-4xl text-black mr-2 block md:hidden'></AiFillLinkedin>
                            </a>
                            <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer"> <AiFillInstagram className='text-4xl text-black mr-2 block md:hidden'></AiFillInstagram>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-base-100 normal-case text-2xl" href='/#home'>Dev.Kbin</a>
            </div>
            <div className="navbar-end">
                <div className='flex'>
                    <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer"> <AiFillGithub className='text-4xl text-black mr-2 hidden md:block'></AiFillGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer"> <AiFillLinkedin className='text-4xl text-info mr-2 hidden md:block'></AiFillLinkedin>
                    </a>
                    <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer"> <AiFillInstagram className='text-4xl text-red-400 mr-2 hidden md:block'></AiFillInstagram>
                    </a>
                </div>

                <a href='https://drive.google.com/file/d/10NmAOHLPs-eXXX1cu8HNZhyQOuHcQXgY/view?usp=sharing' rel="noreferrer" className="btn md:btn-md btn-sm bg-secondary text-base-100 border-0" target="_blank" download>Resume<BiDownload className='ml-2'></BiDownload>
                </a>
            </div>
        </div>
    );
};

export default NavBar;