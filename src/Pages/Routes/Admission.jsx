import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState();
  useEffect(() => {
    fetch("https://college-site-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ms-52 my-8">
      {colleges?.map((college) => (
        <div
          className="h-40 w-52 rounded-lg border-2 border-lime-600 bg-lime-200 "
          key={college._id}>
          <div className="">
            <Link to={`/admissionDetails/${college._id}`}>
              <h2 className="text-center mt-16 text-xl font-medium text-yellow-800">
                {college.college_name}
              </h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admission;
