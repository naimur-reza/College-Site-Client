import React from "react";

const Galary = () => {
  return (
    <div className="bg-lime-100">
      <h1 className="text-center font-thin px-8 py-8 text-5xl text-green-700">
        College Photo Gallary
      </h1>
      <div className="">
        <img
          className="h-80 w-1/2 mx-auto object-cover"
          src="https://i.ibb.co/JvK1WP0/educational-objects-assortment-close-up.jpg"
          alt=""
        />
      </div>
      <div className="flex">
        <img
          className="h-72 w-1/2 mt-2 object-cover"
          src="https://i.ibb.co/PCGnCss/high-angle-globe-with-academic-cap-laptop.jpg"
          alt=""
        />
        <img
          className="h-72 w-1/2 mt-2 ms-2"
          src="https://i.ibb.co/7v6CMqz/front-view-lightbulb-with-academic-cap-copy-space.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-80 w-1/2 mx-auto mt-2 object-cover"
          src="https://i.ibb.co/QXhfjn9/prague-architecture.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Galary;
