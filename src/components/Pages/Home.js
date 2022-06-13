import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import ContactMe from './ContactMe';
import MyProjects from './MyProjects';
import MySkills from './MySkills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Blog></Blog>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;