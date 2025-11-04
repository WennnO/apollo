import React, { useEffect }  from 'react';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 为每张图片预留链接placeholder，您可以在这里填入实际的网址
  const experienceLinks = [
    'https://mp.weixin.qq.com/s/CFHxhuhal706gjHlHS2vlA', // exp1 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/smelQSRuB-fyZnHRbsDxtQ', // exp2 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/N9RPDnZBlW0bfaIyZY1GcQ', // exp3 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/ygEQmsPCP5Ztx8GlwOKW3Q', // exp4 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/MtiHVpgUTCWRiIN6z2UQvg', // exp5 链接 placeholder - 替换为实际链接
    'http://xhslink.com/o/89LIMwImsOz ', // exp6 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/SGjmayshBQrHXKUwPledAA', // exp7 链接 placeholder - 替换为实际链接
    'http://xhslink.com/o/2nayOrfiHf3 ', // exp8 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/fXpu5lSJyG4qnxeUS1j1sw', // exp9 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/N9RPDnZBlW0bfaIyZY1GcQ', // exp10 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/N9RPDnZBlW0bfaIyZY1GcQ', // exp11 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/9Ir-vSfej9XDjlCpk04GXA', // exp12 链接 placeholder - 替换为实际链接
    'https://mp.weixin.qq.com/s/SHBkFLp_7Wp0ZZ2hO7XSxg', // exp13 链接 placeholder - 替换为实际链接
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <br />
        <h1 className="text-4xl font-bold text-center mb-12">Our Past Experiences</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[...Array(13)].map((_, index) => (
            <a
              key={index}
              href={experienceLinks[index] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <img 
                src={`/exp${index + 1}.jpg`}
                alt={`Experience ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-image.jpg' // Optional fallback image
                }}
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  查看详情 →
                </span>
              </div>
              {/* Click indicator */}
              <div className="absolute top-2 right-2 bg-purple-500/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="max-2xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-center">
            我们的团队在音乐会和现场演出策划方面拥有卓越的业绩，为每场活动提供无与伦比的专业知识。我们的成员为众多备受瞩目的音乐会的成功做出了重要贡献，积极参与策划、执行和管理。我们的实践经验和深厚的行业知识确保我们处理的每场活动都符合最高的专业标准。
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">Email: info.apollogenz@gmail.com</p>
              <p className="mb-2">Location: Toronto, Canada</p>
              <p className="mb-2">小红书官方账号ID: Apollo_Official, APOLLOwithU</p>
              <p className="mb-2">微信官方账号ID: APOLLOwithU</p>
              <p className="mb-2">微信公众号: Apollo Gen-Z Media </p>
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