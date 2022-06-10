import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const NavBar = () => {



    return (
        <div class="navbar h-20 sticky top-0 z-50 ease-in-out duration-300 bg-primary">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-8 p-2 shadow bg-accent rounded-box w-52">
                        <li className='text-base-100 text-xl'><Link to='/home'>Home</Link></li>
                        <li className='text-base-100 text-xl'><Link to='/projects'>Projects</Link></li>
                        <li className='text-base-100 text-xl'><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost text-base-100 normal-case text-2xl" href='/#home'>Dev.Kbin</a>
            </div>
            <div class="navbar-end">
                <a href='https://drive.google.com/file/d/10NmAOHLPs-eXXX1cu8HNZhyQOuHcQXgY/view?usp=sharing' rel="noreferrer" class="btn md:btn-md btn-sm bg-secondary text-base-100 border-0" target="_blank" download>Resume<BiDownload className='ml-2'></BiDownload>
                </a>
            </div>
        </div>
    );
};

export default NavBar;