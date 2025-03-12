import React, { useEffect }  from 'react';

// const wxid = require('./wxid.jpg');
// const wxgzh = require('./wxgzh.jpg');

import wxid from './wxid.jpg'; // Import wxid.jpg
import wxgzh from './wxgzh.jpg'; // Import wxgzh.jpg
import joe from './joe.jpg'; // Import joe.jpg


const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <br />
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>

        <div className="flex justify-center items-center mb-16 text-center">
          {[
            { title: '黄西 Joe Wong 脱口秀 ——《Between Jobs》多伦多大学站', image: joe, link: 'https://www.eventbrite.com/e/2025-university-of-toronto-joe-wongs-stand-up-comedy-tour-between-jobs-tickets-1244126709479?aff=oddtdtcreator' },

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
                <h3 className="text-xl font-bold text-center">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-3xl mx-auto mb-16">
          <p className="text-lg leading-relaxed">
          🌟 黄西脱口秀 多伦多大学站 🌟
            🥵工作太卷，生活“水土不服”？“Between jobs”的迷茫，打工人的心酸，这场演出都能让你笑着共鸣！
            🔥4月4日与著名脱口秀演员黄西共度一个轻松愉快的夜晚，让笑声带走你的疲惫和压力！
            🎤全新笑料！全新视角！这次黄西将带来他标志性的幽默，解析打工人的“工愁”交错与生存法则！
            ✨别等了！快加入我们，与黄西一同迎接新的一年，在笑声中驱散压力，共享欢乐时光！
          </p>
          <br />
          <p className="text-lg leading-relaxed mb-8">
          巡演历程回顾：
            黄西是华裔美籍喜剧界的先锋人物，他巧妙地融合了东西方的喜剧传统。拥有博士学位的他，以其冷面笑匠的表演风格和深刻洞察转型为喜剧演员，并迅速征服了全球观众。
            他曾多次亮相《大卫·莱特曼深夜秀》《艾伦秀》《斯蒂芬·科尔伯特晚间秀》等顶级节目，并在2010年主持第66届广播与电视记者协会晚宴，用幽默风趣的语言调侃时任副总统乔·拜登，赢得全场掌声。
          </p>
          <p className="text-lg leading-relaxed">
            黄西（Joe Wong）是一位深受喜爱的美籍华人单口相声演员，他可以进行英语和中文的表演。他曾在知名节目如莱特曼、科尔伯特和艾伦秀中露面。他还曾在第66届广播电视记者晚宴上担任主角，以幽默风趣的风格嘲讽了当时的副总统乔·拜登。
            在中国，黄西主持了自己的电视脱口秀节目《这是真的吗？》10年，积累了丰富的舞台和主持经验。
            2018年黄西被列入《第一代：让美国伟大的36名开拓性移民和难民》一书，为了解美国移民和难民的故事提供了独特的视角。
            除此之外，黄西还出版了许多个人书籍和电子书，进一步丰富了他在文学创作领域的影响力。他以多才多艺的艺术表现和深刻的见解，成为了备受瞩目的华人艺术家之一。2024年被引入亚洲名人堂。
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