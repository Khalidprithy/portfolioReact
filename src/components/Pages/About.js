import React from 'react';

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
                        <p>Front-end Developer</p>
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

        </div>
    );
};

export default About;