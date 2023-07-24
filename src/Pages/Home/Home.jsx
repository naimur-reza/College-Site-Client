import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import CollegeCard from './CollegeCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegeCard></CollegeCard>
            <Galary></Galary>
        </div>
    );
};

export default Home;