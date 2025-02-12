import React from 'react';

// const wxid = require('./wxid.jpg');
// const wxgzh = require('./wxgzh.jpg');

import wxid from './wxid.jpg'; // Import wxid.jpg
import wxgzh from './wxgzh.jpg'; // Import wxgzh.jpg
import intro from './intro.jpg'; 

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us: Who are we?</h1>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-8">
            APOLLO GEN-Z Media Corp. 总部位于加拿大多伦多，拥有丰富的演出承接经验，宣传资源覆盖30+学生联盟及本地商会，成为加拿大首屈一指的新锐专业出海娱乐活动传播公司。除主办、协办及赞助本地活动外，APOLLO GEN-Z 通过自身的影响力及专业性，为感兴趣安排北美海外巡演，出海宣传，海外商演的全球艺人、公司提供全方位的服务，包括且不限于场地租赁、筹备、宣传推广、人员安排、售票管理、现场执行以及售后支持等，致力于为客户提供因地制宜、高品质、高效率的一站式活动解决方案，保证高上座率，深化海外知名度，进一步推升艺人商业价值。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
            Past Experience Image
          </div>
          <div className="flex items-center">
            <p className="text-lg">
              Our team brings extensive experience in concert planning and execution, with our members having played pivotal roles in numerous successful events. We pride ourselves on our attention to detail and commitment to excellence in every project we undertake.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center mb-8">
            <img src={intro} alt="intro" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Toronto Local Connection</h2>
          <p className="text-lg leading-relaxed">
            Our extensive network in Toronto encompasses strong relationships with local communities, premier venues, and technical support providers. These connections enable us to deliver seamless event experiences, from marketing and venue selection to setup and lighting preparation. Our established partnerships ensure efficient coordination and professional execution of every event detail.
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

export default About;