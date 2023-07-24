import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AdmissionDetails = () => {
  const { user } = useContext(AuthContext);
  const [colleges] = useLoaderData();
  console.log(colleges);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const number = form.number.value;
    const address = form.address.value;
    const date = form.date.value;
    const image = form.image.value;
    const collegeImage = colleges.college_image;
    const collegeName = colleges.college_name;
    const admissionDate = colleges.admission_date;
    const collegeRating = colleges.college_rating;
    const researchCount = colleges.research_count;
    const user = {
      name,
      email,
      subject,
      number,
      address,
      date,
      image,
      collegeImage,
      collegeName,
      admissionDate,
      collegeRating,
      researchCount,
    };

    fetch(`https://college-site-server.vercel.app/admission`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${colleges.college_image})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="hero-content text-center text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Candidate Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Candidate Email
                  </span>
                </label>
                <input
                  defaultValue={user.email}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="hero-content text-center text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="number"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="hero-content text-center text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Date Of Birth
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="date-of birth"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="text-black">
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn w-full mt-3 bg-lime-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetails;
