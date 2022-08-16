import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiTailwindcss, SiNetlify } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiCss3, DiJavascript, DiFirebase, DiReact, DiMongodb, DiHeroku, DiNodejsSmall } from 'react-icons/di';


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-primary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
                    <div className="avatar">
                        <div className="w-48 md:w-72 lg:w-96 rounded-full mx-auto">
                            <img src="https://i.ibb.co/2hgDgtK/20200806-181214-01.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='boy' />
                        </div>
                    </div>
                    <div className='my-auto text-neutral'>
                        <p>I am</p>
                        <h1 className="text-5xl font-bold text-accent">Khalid Bin Alam</h1>
                        <p>MERN stack Developer</p>
                        <p className="py-6">I'm a React.js developer. I can help you build your next web application. I am comfortable working with HTML5, CSS3, Bootstrap, Tailwind, React.js. I am also familiar with Node.js, Express.js, MongoDb. </p>
                    </div>
                </div>
            </div>
            <div className='bg-primary min-h-16'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div className="btn gap-2 mx-auto">
                        Projects
                        <div className="badge">12+</div>
                    </div>
                    <div className="btn btn-accent gap-2 mx-auto">
                        Front-end
                        <div className="badge">6+</div>
                    </div>
                    <div className="btn btn-info gap-2 mx-auto">
                        Full-stack
                        <div className="badge">4+</div>
                    </div>
                    <div className="btn btn-success gap-2 mx-auto">
                        Expertise
                        <div className="badge">20+</div>
                    </div>
                </div>
            </div>
            <div className='bg-primary'>
                <h2 className='text-white text-2xl font-bold uppercase py-8'>My Skills</h2>
                <div className='flex flex-wrap gap-4 p-4'>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-orange-500'>
                        <p className='text-2xl'><AiFillHtml5></AiFillHtml5> </p>
                        <p className='font-bold text-sm'>HTML</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-blue-500'>
                        <p className='text-2xl'><DiCss3></DiCss3> </p>
                        <p className='font-bold text-sm'>CSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-yellow-500'>
                        <p className='text-2xl'><DiJavascript></DiJavascript> </p>
                        <p className='font-bold text-sm'>JavaScript</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-violet-500'>
                        <p className='text-2xl'><BsFillBootstrapFill></BsFillBootstrapFill> </p>
                        <p className='font-bold text-sm'>Bootstrap</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-blue-400'>
                        <p className='text-2xl'><SiTailwindcss></SiTailwindcss> </p>
                        <p className='font-bold text-sm'>Tailwind</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-yellow-400'>
                        <p className='text-2xl'><DiFirebase></DiFirebase> </p>
                        <p className='font-bold text-sm'>Firebase</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-blue-400'>
                        <p className='text-2xl'><DiReact></DiReact> </p>
                        <p className='font-bold text-sm'>React</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-green-400'>
                        <p className='text-2xl'><DiNodejsSmall></DiNodejsSmall> </p>
                        <p className='font-bold text-sm'>Node.js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-green-600'>
                        <p className='text-2xl'><DiMongodb></DiMongodb> </p>
                        <p className='font-bold text-sm'>MongoDB</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-teal-500'>
                        <p className='text-2xl'><SiNetlify></SiNetlify> </p>
                        <p className='font-bold text-sm'>Netlify</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-xl text-black h-20 w-20 bg-slate-200 mx-auto hover:scale-110 duration-200 transition ease-in-out delay-50 hover:-translate-y-1  hover:bg-violet-600'>
                        <p className='text-2xl'><DiHeroku></DiHeroku> </p>
                        <p className='font-bold text-sm'>Heroku</p>
                    </div>

                </div>
            </div>


            <div className='bg-primary h-auto md:h-52'>
                <h1 className='text-white text-2xl font-bold uppercase py-8'>Education</h1>
                <div className='py-10 bg-primary'>
                    <ul className="steps steps-vertical md:steps-horizontal w-full">
                        <li className="step step-success text-neutral md:mx-0 mx-auto">SSC-2012</li>
                        <li className="step step-success text-neutral md:mx-0 mx-auto">HSC-2015</li>
                        <li className="step step-success text-neutral md:mx-0 mx-auto">BSc-2022</li>
                        <li className="step text-neutral md:mx-0 mx-auto">Next ----</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default About;