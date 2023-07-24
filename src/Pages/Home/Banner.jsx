import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/two-happy-students-with-backpacks-books-their-hands-smiling-camera_8353-6384.jpg?w=740&t=st=1690213668~exp=1690214268~hmac=62ab59a3fc6509132be666455a4e0a44dc73d78ddacc9673ad68206650eb9009)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content font-serif">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Find Your College of choice
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-lime-500 bg-opacity-10 w-full max-w-xs"
          />
          <label htmlFor="" className="text-white btn btn-outline">
            Search
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
