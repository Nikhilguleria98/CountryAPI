import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center mt-10 sm:mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 md:justify-between gap-5">
 
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center md:text-left">
            Explore the World, One <br className="hidden sm:block" /> Country at a Time
          </h1>
          <p className="text-slate-400 text-sm mt-4 text-center md:text-left">
            Discover the history, culture, and beauty of every nation. Sort, search, and <br className="hidden sm:block" /> filter through countries to find the details you need.
          </p>
        </div>
    
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/world.png"
            alt="World Map"
            className="max-w-full h-auto w-64 sm:w-96 md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
