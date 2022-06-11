import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="card card-side w-fit bg-slate-500 text-white rounded-md">
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
        </div>
    );
};

export default Project;