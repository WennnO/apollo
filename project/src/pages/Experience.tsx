import React from 'react';

const Experience = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Past Experiences</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                经验图片 {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg leading-relaxed">
            With a track record of excellence in concert and livehouse planning, our team brings unparalleled expertise to every event. Our members have been integral to the success of numerous high-profile concerts, taking active roles in planning, execution, and management. Our hands-on experience and deep industry knowledge ensure that each event we handle meets the highest professional standards.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">Email: contact@apollogenz.com</p>
              <p>Location: Toronto, Canada</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                二维码 1
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                二维码 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;