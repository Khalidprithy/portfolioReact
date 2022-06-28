import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='bg-primary'>
            <h4 className='text-xl font-bold text-center text-neutral'>My All Projects</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 '>
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