import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Dynamically import all markdown files
const mdFiles = import.meta.glob('../content/guide/*.md', { query: '?raw', import: 'default' });

export default function GuideArticle() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const key = `../content/guide/${slug}.md`;
    const loader = mdFiles[key];

    if (!loader) {
      setError(true);
      setLoading(false);
      return;
    }

    loader()
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">😕 文章未找到</h1>
        <p className="text-text-secondary mb-6">
          抱歉，这篇指南文章尚不存在。欢迎在社区提议新内容！
        </p>
        <Link
          to="/guide"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors no-underline"
        >
          ← 返回指南列表
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
      <div className="mt-12 pt-6 border-t border-border">
        <Link
          to="/guide"
          className="text-primary hover:text-primary-light transition-colors no-underline text-sm font-medium"
        >
          ← 返回指南列表
        </Link>
      </div>
    </div>
  );
}
