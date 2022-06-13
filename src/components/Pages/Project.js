import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="card card-side w-fit bg-primary mx-auto text-white rounded-md">
            <div class="container max-w-md mx-auto md:px-6 px-4 my-4">

                <div class="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">

                    <div class="flex flex-wrap items-center">


                        <div class="flex w-full h-48 md:h-64 lg:h-72 relative">

                            <div class="w-8/12 pr-4 relative">


                                <img src={project.image} class="w-full h-full object-cover object-top rounded-lg bg-white" alt='' />

                            </div>

                            <div class="w-4/12 h-full">

                                <div class="flex flex-col w-full h-full">

                                    <div class="flex-1 pb-2">

                                        <div class="w-full h-full relative">

                                            <img src="https://stackdiary.com/140x100.png" class="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white" alt='' />

                                        </div>

                                    </div>

                                    <div class="flex-1 pt-2">

                                        <div class="w-full h-full relative">

                                            <img src="https://stackdiary.com/140x100.png" class="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white" alt='' />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="w-full pt-8 flex flex-col justify-between">

                            <div>

                                <h2 class="font-bold text-xl">{project.name}</h2>

                                <div class="flex flex-wrap text-center pt-4 mb-2">


                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Tailwind CSS</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">DaizyUI</div>

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Next.js</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Express.js</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">MongoDB</div>

                                </div>

                                <p class="text-xs leading-relaxed text-gray-50">{project.details}</p>

                                <ul class="text-xs text-left mt-4 list-disc list-inside text-gray-50 leading-relaxed">

                                    <li>Responsive</li>

                                    <li> Mobile-friendly</li>

                                    <li> Media queries</li>


                                </ul>

                            </div>

                            <div class="w-full sm:flex-1 grid gap-4 grid-cols-3 pt-6">

                                <button class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Live Site</button>

                                <a href="https://stackdiary.com/" class="flex items-center justify-center text-center relative font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Client</a>

                                <a href="https://stackdiary.com/" class="flex items-center justify-center text-center relative font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Server</a>



                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Project;


/* 
 <figure><img className='image-full' src={project.image} alt="Shoes" /></figure>
            <div className="p-2 text-left">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.details.slice(0, 200)}...</p>
                <p><span className='font-bold'>Category:</span> {project.category}</p>
                <p><span className='font-bold'>Features Used:</span> {project.features}</p>
                <div className='flex mx-auto'>
                    <a className='font-bold text-accent ml-2' href={project.github_client}>Live Site</a>
                    <a className='font-bold text-accent ml-2' href={project.github_client}>Client</a>
                    <a className='font-bold text-accent ml-2' href={project.github_client}>Server</a>
                </div>
            </div>
*/