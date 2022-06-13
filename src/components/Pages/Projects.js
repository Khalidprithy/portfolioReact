import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const url = 'projects.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div className='bg-primary'>
            <h4 className='text-xl font-bold text-center text-neutral'>My All Projects</h4>
            <div className='flex flex-wrap justify-center items-center mt-6 '>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;