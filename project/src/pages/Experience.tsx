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

export default Experience;