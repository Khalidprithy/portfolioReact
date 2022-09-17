import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const Project = ({ project }) => {

    const { features } = project;

    return (
        <div className="card card-side w-fit h-full bg-primary mx-auto text-white rounded-md">
            <div className="mx-auto md:px-6 px-4 my-4">
                <div className=" border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10 h-full w-full mb-4">
                    <div className="flex flex-wrap items-center">
                        <div className="flex w-full relative  h-72">
                            <div className="w-8/12 pr-4 relative">
                                <img src={project.image} className="h-full object-cover object-center rounded-lg bg-white" alt='' />
                            </div>
                            <div className="w-4/12 h-full">
                                <div className="flex flex-col w-full">
                                    <div className="flex-1 pb-2">
                                        <div className="w-full h-full relative">
                                            <img src={project.image2} className="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white" alt='' />
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <div className="w-full h-full relative">
                                            <img src={project.image3} className="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-xl">{project.name}</h2>
                                <h4>{project.category}</h4>
                                <div className="flex flex-wrap text-center pt-4 mb-2">
                                    {
                                        features.map(element => <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">{element}</div>
                                        )
                                    }

                                </div>
                                <p className="text-xs leading-relaxed text-gray-50 text-left">{project.details}</p>
                                <ul className="text-xs text-left mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                                    <li>Responsive</li>
                                    <li> Mobile-friendly</li>
                                    <li> Media queries</li>
                                </ul>
                            </div>
                            <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 absolute bottom-1 right-0 px-1">

                                <a href={project.live_site} className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-neutral hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                                <a href={project.github_client} className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                                <a href={project.github_server} className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
