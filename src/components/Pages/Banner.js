import React from 'react';
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/about')
    }

    const handleHireMe = () => {
        navigate('/#contactMe')
    }


    return (
        <div className="h-96 mt-0 bg-primary">
            <div className="hero-content text-center mx-auto">
                <div className="max-w-md text-neutral">
                    <p>Hello There</p>
                    <h1 className="text-8xl font-bold text-center">I'm Khalid</h1>
                    <p className="py-6">MERN stack Developer. I have experience building web applications with React, Node.Js, Express.Js, MongoDB</p>
                    <button
                        onClick={handleHireMe}
                        className="btn btn-sm btn-secondary text-white">Hire Me</button>
                    <button
                        onClick={handleLearnMore}
                        className="btn btn-sm btn-accent text-white ml-2">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;