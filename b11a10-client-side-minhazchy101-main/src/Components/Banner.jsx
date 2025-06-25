import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <>
         <div className="my-5 mx-3">
  <div className="w-full md:max-w-10/12 mx-auto flex flex-col lg:flex-row justify-around items-center">
    <img
      src="https://i.ibb.co/4wPqXCGp/6241ecde-8dd7-4493-8733-e9e35141680b.png"
      className="w-full md:max-w-lg rounded-lg shadow-2xl "
    />

    <div>
      <h1 className="text-5xl font-bold">Connect Through <br /> shared Passions!</h1>
      <p className="py-6">
        Join or Create local group and meet like minded People.
      </p>
      <Link to='register' className="btn btn-primary text-white">Get Started</Link>
    </div>
  </div>
</div>   
        </>
    );
};

export default Banner;