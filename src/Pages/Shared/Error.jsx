import React from "react";
import { Link } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";

const Error = () => {
  return (
    <div className="h-[600px]">
      <img
        className="h-full w-full object-cover relative"
        src="https://i.ibb.co/y8TWL7K/1593076-224735-P2-H3-ZG-700.jpg"
        alt=""
      />
      <Bounce>
        <button className="block mx-auto -mt-10 btn btn-warning">
          <Link to="/">Back To Home</Link>
        </button>
      </Bounce>
    </div>
  );
};

export default Error;
