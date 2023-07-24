import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Colleges = () => {
  const [colleges, setColleges] = useState();
  useEffect(() => {
    fetch("https://college-site-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(colleges);
  return (
    <div className="bg-black/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center justify-items-center">
        {colleges?.map((college) => (
          <div key={college._id}>
            <div className="card m-5 lg:card-side bg-black/60 shadow-xl w-full">
              <figure>
                <img
                  className="w-3/4"
                  src={college.college_image}
                  alt="Album"
                />
              </figure>
              <div className="card-body w-full space-y-5">
                <h2 className="card-title">{college.college_name}</h2>
                <div className="flex justify-between">
                  <p>
                    <AiFillStar className="inline" />
                    {college.college_rating}
                  </p>
                  <p>
                    <FaSearch className="inline" />
                    {college.research_count}
                  </p>
                </div>
                <Link to={`/collegeDetails/${college._id}`}>
                  <button className="btn btn-outline btn-sm">
                    Details
                    <AiOutlineArrowRight className="inline" />
                  </button>
                </Link>
                <p className="ms-auto">{college.admission_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
