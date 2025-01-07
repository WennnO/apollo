import React from 'react';

// import background from './background.png';

const background = require('./background.png');

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/60 z-10" />
/*
      <div className="图片1 absolute inset-0 bg-black">
        {background}
      </div>
*/
      <div 
        className="absolute inset-0 bg-black" 
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center font-display">
          Apollo Gen-Z Media
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Experienced world-class concert planning
        </p>
      </div>
    </div>
  );
}

export default Hero;