import React from 'react';

// const wxid = require('./wxid.jpg');
// const wxgzh = require('./wxgzh.jpg');

import wxid from './wxid.jpg'; // Import wxid.jpg
import wxgzh from './wxgzh.jpg'; // Import wxgzh.jpg
import service1 from './service1.jpg'; // Import service1.jpg
import service2 from './service2.jpg'; // Import service2.jpg
import service3 from './service3.jpg'; // Import service3.jpg
import service4 from './service4.jpg';

const Service = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { title: '主办方', image: service1 },
            { title: '承办方：演唱会/livehouse落地', image: service2 },
            { title: '票务/宣发', image: service3 },
            { title: '活动统筹', image: service4 }
          ].map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-3xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-8">
          At Apollo, we are more than just event organizers—we are pioneers in Toronto’s live entertainment scene, bringing years of expertise in curating unforgettable experiences. With a deep understanding of the Canadian entertainment industry, we have successfully orchestrated numerous high-profile concerts, live house events, and large-scale productions, ensuring seamless execution from ticketing to stage management. Our extensive network with top-tier venues, artists, and industry professionals in Toronto allows us to create premium, fan-centric events that set new benchmarks in the Gen-Z entertainment landscape. Whether it’s event organization, concert production, ticketing, or strategic marketing, Apollo delivers with precision, passion, and innovation. Partner with us, and let’s bring your next event to life in the heart of Canada’s most vibrant city!
          </p>
          <p className="text-lg leading-relaxed">
          Apollo is not just a service; it’s a commitment to the Gen-Z movement, a movement that transcends boundaries and celebrates diversity. We are more than just a service; we are a movement, a community, and a platform. We are here to support, to inspire, and to empower, and we are committed to making a difference in the lives of those who live, work, and play in Toronto.
          </p>
          <br />
          <br />
          <p className="text-lg leading-relaxed">
          在Apollo，我们不仅仅是活动组织者，更是多伦多现场娱乐领域的开拓者，凭借多年专业经验，精心打造令人难忘的体验。我们深入了解加拿大娱乐产业，成功策划了众多备受瞩目的音乐会、Livehouse演出及大型制作活动，从票务安排到舞台管理，确保每一个环节都顺畅无误。我们与多伦多顶级场馆、艺人及行业专家建立了广泛联系，得以打造以粉丝为核心的高品质活动，为Z世代娱乐市场树立新标杆。无论是活动组织、音乐会制作、票务服务，还是策略营销，Apollo都以精准、热忱与创新交付成果。与我们携手合作，让我们在加拿大这座最具活力城市的中心，为您的下一场活动注入无限生机！
          </p>
          <br />
          <p className="text-lg leading-relaxed">
          Apollo不仅是一项服务，更是对Gen-Z潮流的一种承诺。这一潮流跨越界限，颂扬多元。我们不只提供服务，我们本身就是一股潮流、一个社群，也是一个平台。我们在此提供支持、激发灵感、赋予力量，并且致力于将更多更好的演出带给大家。
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

export default Service;