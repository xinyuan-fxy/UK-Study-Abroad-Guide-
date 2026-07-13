import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => { document.title = '404 - 原心咯的英国留学指南'; }, []);
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-text-secondary mb-8">
        页面不存在，可能链接有误或内容已移除。
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors no-underline"
      >
        ← 返回首页
      </Link>
    </div>
  );
}
