import React from 'react';

// const wxid = require('./wxid.jpg');
// const wxgzh = require('./wxgzh.jpg');

import wxid from './wxid.jpg'; // Import wxid.jpg
import wxgzh from './wxgzh.jpg'; // Import wxgzh.jpg
// import exp1 from './exp1.jpg';
// import exp2 from './exp2.jpg';
// import exp3 from './exp3.jpg';
// import exp4 from './exp4.jpg';
// import exp5 from './exp5.jpg';
// import exp6 from './exp6.jpg';
// import exp7 from './exp7.jpg';
// import exp8 from './exp8.jpg';
// import exp9 from './exp9.jpg';
// import exp10 from './exp10.jpg';
// import intro from './intro.jpg';


const Experience = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Past Experiences</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[...Array(11)].map((_, index) => (
            <div key={index} className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={`/exp${index + 1}.jpg`}
                alt={`Experience ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-image.jpg' // Optional fallback image
                }}
              />
              {/* <div className="w-full h-full flex items-center justify-center text-gray-500">
                经验图片 {index + 1}
              </div> */}
            </div>
          ))}
        </div>

        <div className="max-3xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-center">
            我们的团队在音乐会和现场演出策划方面拥有卓越的业绩，为每场活动提供无与伦比的专业知识。我们的成员为众多备受瞩目的音乐会的成功做出了重要贡献，积极参与策划、执行和管理。我们的实践经验和深厚的行业知识确保我们处理的每场活动都符合最高的专业标准。
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">Email: info.apollogenz@gmail.com</p>
              <p>Location: Toronto, Canada</p>
              <p>小红书官方账号ID: Apollo_Official, APOLLOwithU</p>
              <p>微信官方账号ID: APOLLOwithU</p>
              <p>微信公众号: Apollo Gen-Z Media </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* First image */}
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                <img src={wxid} alt="WXID" className="rounded-lg object-cover h-full w-full" />
              </div>
              {/* Second image */}
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                <img src={wxgzh} alt="WXGZH" className="rounded-lg object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;