import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CollegeCard = () => {
    const [colleges, setColleges] = useState();
    useEffect(() => {
        fetch('https://college-site-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
            .catch(error => console.log(error))
    }, [])
    console.log(colleges);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ms-10'>
            {
                colleges?.slice(0, 3).map(college => <div key={college._id} className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src={college.college_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <h5 className='text-xl font-semibold'>{college.college_name}</h5>
                            <h5 className='text-sm font-medium'>{college.admission_date}</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-xs font-medium space-y-2' >
                                <p><FaArrowDown className='inline-block' />{college.details.events_facilities[0]}</p>
                                <p><FaArrowDown className='inline-block' />{college.details.events_facilities[1]}</p>
                                <p><FaArrowDown className='inline-block' />{college.details.events_facilities[2]}</p>
                            </div>
                            <div className='text-xs font-medium space-y-2' >
                                <p><FaArrowDown className='inline-block' />{college.details.sports_facilities[0]}</p>
                                <p><FaArrowDown className='inline-block' />{college.details.sports_facilities[1]}</p>
                                <p><FaArrowDown className='inline-block' />{college.details.sports_facilities[2]}</p>
                            </div>
                        </div>
                        <Link to={`/collegeDetails/${college._id}`}><button className='mt-3 ms-auto btn btn-sm '>Details<FaArrowRight className='inline-block'/></button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CollegeCard;