import React from 'react';

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-primary">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
                    <div class="avatar">
                        <div class="w-48 md:w-72 lg:w-96 rounded-full mx-auto">
                            <img src="https://i.ibb.co/2hgDgtK/20200806-181214-01.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='boy' />
                        </div>
                    </div>
                    <div className='my-auto text-neutral'>
                        <p>I am</p>
                        <h1 class="text-5xl font-bold text-accent">Khalid Bin Alam</h1>
                        <p>Front-end Developer</p>
                        <p class="py-6">I'm a React.js developer. I can help you build your next web application. I am comfortable working with HTML5, CSS3, Bootstrap, Tailwind, React.js. I am also familiar with Node.js, Express.js, MongoDb. </p>
                    </div>
                </div>
            </div>
            <div className='bg-primary min-h-16'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div class="btn gap-2 mx-auto">
                        Projects
                        <div class="badge">12+</div>
                    </div>
                    <div class="btn gap-2 mx-auto">
                        Projects
                        <div class="badge">12+</div>
                    </div>
                    <div class="btn gap-2 mx-auto">
                        Projects
                        <div class="badge">12+</div>
                    </div>
                    <div class="btn gap-2 mx-auto">
                        Projects
                        <div class="badge">12+</div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default About;