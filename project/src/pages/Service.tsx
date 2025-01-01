import React from 'react';

const Service = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center mb-16">
          团队介绍
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: '主办方', image: 'service1' },
            { title: '承办方：演唱会/livehouse落地', image: 'service2' },
            { title: '票务/宣发', image: 'service3' },
            { title: '活动统筹', image: 'service4' }
          ].map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                {service.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
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
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                {wxid.jpg}
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                {wxgzh.jpg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;