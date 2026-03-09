import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-nordic-ink text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="serif text-3xl mb-6">心境</h2>
          <p className="text-white/60 max-w-md leading-relaxed">
            通过极简设计和严谨的心理学框架，探索人类人格的深度。基于克制、清晰和有目的性的北欧设计原则。
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/40">测评框架</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="hover:text-nordic-accent transition-colors">MBTI 16型人格</a></li>
            <li><a href="#" className="hover:text-nordic-accent transition-colors">九型人格</a></li>
            <li><a href="#" className="hover:text-nordic-accent transition-colors">荣格八维</a></li>
            <li><a href="#" className="hover:text-nordic-accent transition-colors">大五人格</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/40">联系我们</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="hover:text-nordic-accent transition-colors">订阅通讯</a></li>
            <li><a href="#" className="hover:text-nordic-accent transition-colors">联系支持</a></li>
            <li><a href="#" className="hover:text-nordic-accent transition-colors">隐私政策</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/40 uppercase tracking-widest">
        <span>© 2026 心境. 保留所有权利。</span>
        <span>Designed in Stockholm</span>
      </div>
    </footer>
  );
};
