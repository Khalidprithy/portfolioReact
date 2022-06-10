import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer class="footer items-center p-4 bg-primary text-neutral-content">
            <div class="items-center grid-flow-col">
                <p className='text-neutral'>Copyright © Dev.Kbin - All right reserved</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer"> <AiFillGithub className='text-4xl text-black'></AiFillGithub>
                </a>
                <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer"> <AiFillLinkedin className='text-4xl text-info'></AiFillLinkedin>
                </a>
                <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer"> <AiFillInstagram className='text-4xl text-red-400'></AiFillInstagram>
                </a>

            </div>
        </footer>
    );
};

export default Footer;