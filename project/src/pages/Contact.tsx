import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-center mb-12 text-gray-300">期待您的联系</p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-2">小红书官方账号ID: Apollo_Official, APOLLOwithU</p>
                <p className="mb-2">Email: info.apollogenz@gmail.com</p>
                <p>Location: Toronto, Canada</p>
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
    </div>
  );
}

export default Contact;