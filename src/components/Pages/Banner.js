import React from 'react';
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/about')
    }


    return (
        <div class="md:min-h-screen h-96 mt-0 bg-primary">
            <div class="hero-content text-center mx-auto">
                <div class="max-w-md text-neutral">
                    <p>Hello There</p>
                    <h1 class="text-8xl font-bold text-center">I'm Khalid</h1>
                    <p class="py-6">Front-end Developer. React.js Developer</p>
                    <button class="btn btn-sm btn-secondary text-white">Hire Me</button>
                    <button
                        onClick={handleLearnMore}
                        class="btn btn-sm btn-accent text-white ml-2">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;