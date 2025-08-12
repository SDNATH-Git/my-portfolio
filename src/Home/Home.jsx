import React from 'react';
import Designation from '../Pages/Designation';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Education from '../Pages/Education';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';


const Home = () => {
    return (
        <div id="home">
            <Designation ></Designation>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contacts></Contacts>

        </div>
    );
};

export default Home;