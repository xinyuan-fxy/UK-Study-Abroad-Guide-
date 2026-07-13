import { useEffect, useRef } from 'react';

export default function Community() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only mount giscus once
    if (containerRef.current && !containerRef.current.querySelector('giscus-widget')) {
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', 'xinyuan-fxy/UK-Study-Abroad-Guide-');
      script.setAttribute('data-repo-id', 'R_kgDOTwXBZQ');
      script.setAttribute('data-category', 'General');
      script.setAttribute('data-category-id', 'DIC_kwDOTwXBZc4DBFjf');
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'preferred_color_scheme');
      script.setAttribute('data-lang', 'zh-CN');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">💬 交流社区</h1>
      <p className="text-text-secondary mb-8">
        在这里提问、分享经验、讨论留学生活。你的每一条留言都会帮助到后来的同学。
      </p>

      {/* Community Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-blue-800 mb-2">📋 社区守则</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>🙏 友善交流，尊重他人观点和经验</li>
          <li>📝 分享真实、有用的信息，拒绝广告和 spam</li>
          <li>🔍 提问前建议先搜索是否已有相关讨论</li>
          <li>🌍 欢迎用中文或英文交流</li>
        </ul>
      </div>

      {/* Coming Soon: topic sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { emoji: '🎓', title: '新生问答', desc: '关于选校、专业、行前准备的问题' },
          { emoji: '🏠', title: '租房找室友', desc: '找房经验、合租信息、合同问题' },
          { emoji: '🍜', title: '吃喝玩乐', desc: '美食推荐、旅行攻略、周末活动' },
          { emoji: '💼', title: '求职实习', desc: 'PSW签证、实习机会、简历建议' },
        ].map((topic) => (
          <div
            key={topic.title}
            className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <span className="text-2xl">{topic.emoji}</span>
            <h3 className="font-semibold mt-2 mb-1">{topic.title}</h3>
            <p className="text-sm text-text-secondary">{topic.desc}</p>
          </div>
        ))}
      </div>

      {/* Giscus Comments */}
      <div className="bg-white rounded-xl border border-border p-6">
        <h2 className="text-xl font-semibold mb-4">💭 留言讨论</h2>
        <div ref={containerRef} className="min-h-[200px]" />
      </div>
    </div>
  );
}
