import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import {AiFillStar } from 'react-icons/ai';
import {FaSearch } from 'react-icons/fa';
const CollegeDetails = () => {
    const [colleges] = useLoaderData();
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={colleges.college_image} className="max-w-sm rounded-lg shadow-2xl h-[400px] w-[400px]" />
                    <div className='space-y-4'>
                        <h1 className="text-5xl font-bold">{colleges.college_name}</h1>
                        <div className='flex justify-around'>
                            <div>
                                <h3 className='text-xl font-medium'>Events : </h3>
                                <p><BsArrowUpRight className='inline' />{colleges.details.events_facilities[0]}</p>
                                <p><BsArrowUpRight className='inline' />{colleges.details.events_facilities[1]}</p>
                                <p><BsArrowUpRight className='inline' />{colleges.details.events_facilities[2]}</p>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium'>Sports : </h3>
                                <p><BsArrowUpRight className='inline' />{colleges.details.sports_facilities[0]}</p>
                                <p><BsArrowUpRight className='inline' />{colleges.details.sports_facilities[1]}</p>
                                <p><BsArrowUpRight className='inline' />{colleges.details.sports_facilities[2]}</p>
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <p><AiFillStar className='inline' />Ratings : {colleges.college_rating}</p>
                            <p><FaSearch className='inline' />Research : {colleges.research_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;