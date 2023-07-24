import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaCalendar, FaStar, FaPen } from 'react-icons/fa';
const MyColleges = () => {
    const { user } = useContext(AuthContext);
    const [myColleges, setMyColleges] = useState([]);
    useEffect(() => {
        fetch(`https://college-site-server.vercel.app/myColleges/${user.email}`)
            .then(res => res.json())
            .then(data => setMyColleges(data))
            .catch(error => console.log(error))
    }, [])
    console.log(myColleges);

    const handleReview = event => {
       const review = event.target.value;
       console.log(review);
    }
    return (
        <div className='grid grid-cols-1'>
            {
                myColleges?.map(colleges => <div key={colleges._id}>
                    <div className="hero min-h-[500px] bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={colleges.collegeImage} className="max-w-md rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{colleges.collegeName}</h1>
                                <div className='flex justify-around mt-3'>
                                    <p><FaCalendar className='inline-block' />{colleges.admissionDate}</p>
                                    <p><FaStar className='inline-block' />{colleges.collegeRating}</p>
                                    <p><FaPen className='inline-block' />{colleges.researchCount}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-medium my-2'>Information :</h2>
                                    <p>Email : {colleges.email}</p>
                                    <p>Phone : {colleges.Number}</p>
                                    <p>Subject : {colleges.subject}</p>
                                    <p>Address : {colleges.address}</p>
                                </div>
                               
                                   <textarea name='review' className="textarea textarea-success ms-96" placeholder="add review"></textarea>
                                  <button onClick={handleReview} className='btn'>Submit</button>
                                
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyColleges;