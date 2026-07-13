import { Link } from 'react-router-dom';

const quickLinks = [
  { emoji: '🎓', title: '行前准备', slug: 'pre-departure' },
  { emoji: '🛂', title: '签证攻略', slug: 'visa-guide' },
  { emoji: '🏠', title: '租房住宿', slug: 'accommodation' },
  { emoji: '🏦', title: '银行开户', slug: 'banking' },
  { emoji: '📱', title: '电话卡', slug: 'mobile-sim' },
  { emoji: '🏥', title: '医疗保障', slug: 'healthcare' },
  { emoji: '🚇', title: '交通出行', slug: 'transport' },
  { emoji: '🍜', title: '饮食购物', slug: 'food-shopping' },
  { emoji: '💼', title: '兼职打工', slug: 'part-time-work' },
  { emoji: '📚', title: '学习攻略', slug: 'study-tips' },
  { emoji: '🎉', title: '社交娱乐', slug: 'social-life' },
  { emoji: '🔐', title: '安全须知', slug: 'safety' },
  { emoji: '🎓', title: '毕业去向', slug: 'after-graduation' },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">🇬🇧 英国留学指南</h1>
        <p className="text-lg text-blue-100 max-w-xl mx-auto mb-6">
          25年 Fall 入学，一站式留学生活手册。开源共创。
        </p>
        <Link
          to="/guide"
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors no-underline"
        >
          开始阅读 →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-center mb-8">📖 热门话题</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.slug}
              to={`/guide/${item.slug}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-border hover:shadow-md hover:border-primary/30 transition-all no-underline"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium text-text-main">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
