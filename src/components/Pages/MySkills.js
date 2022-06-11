import React from 'react';
import { AiFillHtml5, AiFillApi, AiFillGithub } from 'react-icons/ai';
import { DiBootstrap, DiReact, DiNodejs, DiMongodb, DiFirebase } from 'react-icons/di';
import { SiTailwindcss, SiVisualstudiocode, SiHeroku, SiNetlify } from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';

const MySkills = () => {
    return (
        <div className="min-h-fit md:h-72 mt-0 bg-primary">
            <h1 className="text-5xl text-neutral mb-6 font-bold">My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4'>
                <div className="card w-72 md:w-52 bg-neutral text-neutral-content mx-auto">
                    <div className="card-body items-center text-center">
                        <h2 className='text-xl font-bold'>Front-end</h2>
                        <div className='flex'>
                            <AiFillHtml5></AiFillHtml5>
                            <IoLogoCss3></IoLogoCss3>
                            <IoLogoJavascript></IoLogoJavascript>
                            <DiBootstrap></DiBootstrap>
                            <SiTailwindcss></SiTailwindcss>
                            <DiReact></DiReact>
                        </div>
                        <div>
                            <p className='font-bold text-sm'>HTML5, CSS3, JavaScript, Bootstrap, Tailwind, React.js</p>
                        </div>
                    </div>
                </div>
                <div className="card w-72 md:w-52 bg-neutral text-neutral-content mx-auto">
                    <div className="card-body items-center text-center">
                        <h2 className='text-xl font-bold'>Back-end</h2>
                        <div className='flex'>
                            <DiNodejs></DiNodejs>
                            <DiMongodb></DiMongodb>
                            <AiFillApi></AiFillApi>
                        </div>
                        <div>
                            <p className='font-bold text-sm'>Node.js, Express.js, MongoDB, API</p>
                        </div>
                    </div>
                </div>
                <div className="card w-72 md:w-52 bg-neutral text-neutral-content mx-auto">
                    <div className="card-body items-center text-center">
                        <h2 className='text-xl font-bold'>Tools</h2>
                        <div className='flex'>
                            <SiVisualstudiocode></SiVisualstudiocode>
                            <AiFillGithub></AiFillGithub>
                            <SiHeroku></SiHeroku>
                            <SiNetlify></SiNetlify>
                            <DiFirebase></DiFirebase>
                        </div>
                        <div>
                            <p className='font-bold text-sm'>VS code, GitHub, Heroku, Netlify</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;