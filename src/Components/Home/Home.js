import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <>
            <Header/>
            <HeaderMain/>
            <Projects/>
            <Blogs/>
            <About/>
            <Contact/>
        </>
    );
};

export default Home;