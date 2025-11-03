import React, { useState, useEffect } from 'react';
import background from './background.png';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // 预加载背景图片 - 使用更早的时机
    const img = new Image();
    
    // 设置fetchpriority提示（虽然主要用于img标签，但有助于浏览器优化）
    img.loading = 'eager';
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // 即使错误也显示，避免一直加载
    };

    // 先检查图片是否已在缓存中
    img.src = background;
    
    // 如果图片已经在缓存中，立即设置loaded
    if (img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    }

    // 清理函数
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* 加载中的占位符 - 渐变背景 */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 animate-pulse"
          style={{
            transition: 'opacity 0.5s ease-out',
          }}
        />
      )}

      {/* 背景图片 */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageError ? 'none' : `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 内容 */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center font-display">
          Apollo Gen&#8209;Z Media
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Experienced world-class concert planning
        </p>
      </div>
    </div>
  );
}

export default Hero;