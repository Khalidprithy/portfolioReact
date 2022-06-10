import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const MyProjects = () => {
    return (
        <div className='bg-primary'>
            <h4 class="text-5xl text-neutral font-bold">My Projects</h4>
            <div class="hero min-h-screen md:h-64">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/TbcHfRy/Toolsegy.png" class="max-w-sm rounded-lg shadow-2xl w-52 md:w-auto" alt='' />
                    <div className='text-neutral'>
                        <h1 class="text-2xl font-bold">Toolsegy</h1>
                        <p class="py-6">Warehouse Management Application. It is a warehouse management application built with React. I have also made the server-side with NodeJS and MongoDB. I have used Tailwind and DaizyUI to design this application. I found this combination is flexible and productive. It also offers the flexibility to customize in the future.</p>
                        <a href='https://toolsegy-9e5ff.web.app/' target="_blank" rel="noreferrer" class="btn btn-primary">Live Site</a>
                        <a href='https://github.com/Khalidprithy/Toolsegy-client' target="_blank" rel="noreferrer" class="btn btn-primary"><AiFillGithub className='mr-2'></AiFillGithub> Client</a>
                        <a href='https://github.com/Khalidprithy/Toolsegy-server' target="_blank" rel="noreferrer" class="btn btn-primary"> <AiFillGithub className='mr-2'></AiFillGithub> Server</a>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen md:h-64">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/KjZbY4R/Firebase-Login.png" class="max-w-sm rounded-lg shadow-2xl h-52" alt='' />

                    <div className='text-neutral'>
                        <h1 class="text-2xl font-bold">Firebase Authentication Login</h1>
                        <p class="py-6">This is a simple firebase login system. I have added three social media login options. User can login using Google, Facebook and GitHub. I have deployed the site in firebase. You can check the live site and Github code bellow</p>
                        <a href='https://fir-login-react-1d78c.web.app/' target="_blank" rel="noreferrer" class="btn btn-primary">Live Site</a>
                        <a href='https://github.com/Khalidprithy/firebase-login-auth' target="_blank" rel="noreferrer" class="btn btn-primary"><AiFillGithub className='mr-2'></AiFillGithub> Client</a>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen md:h-64">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/N70Wkn7/M-M.png" class="max-w-sm rounded-lg shadow-2xl  w-52 md:w-auto" alt='' />
                    <div className='text-neutral'>
                        <h1 class="text-2xl font-bold">Modern & Minimal</h1>
                        <p class="py-6">This is a react application for a clothing store to manage their products and sales. Bootstrap CSS framework is used to style the website. Which give user a consistent look and feel. I have added Rechart so that user can easily check and track sells and other business information. Login authentication is added with react firebase hooks. For social login, user can login with google or facebook.

                            I have used Node.js express and MongoDB for server site. The server site is hosted on Heroku.

                            I have attached both client and server site link bellow.</p>
                        <a href='https://inventory-management-app-679a4.web.app/' target="_blank" rel="noreferrer" class="btn btn-primary">Live Site</a>
                        <a href='https://github.com/Khalidprithy/inventory-menagement-client' target="_blank" rel="noreferrer" class="btn btn-primary"><AiFillGithub className='mr-2'></AiFillGithub> Client</a>
                        <a href='https://github.com/Khalidprithy/inventory-menagement-server' target="_blank" rel="noreferrer" class="btn btn-primary"> <AiFillGithub className='mr-2'></AiFillGithub> Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;