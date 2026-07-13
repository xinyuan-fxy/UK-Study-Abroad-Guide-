import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📚',
    title: '留学指南',
    desc: '从行前准备到落地生活，覆盖签证、住宿、银行、医疗等全方位攻略。',
    link: '/guide',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: '🛠️',
    title: '实用工具',
    desc: '行李清单、汇率换算、BRP 提醒等实用小工具，让你的留学生活更轻松。',
    link: '/tools',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: '💬',
    title: '交流社区',
    desc: '与其他留学生交流经验、提问答疑，一起完善这份开源指南。',
    link: '/community',
    color: 'bg-purple-50 text-purple-700',
  },
];

const quickLinks = [
  { emoji: '🎓', title: '行前准备', slug: 'pre-departure' },
  { emoji: '🛂', title: '签证攻略', slug: 'visa-guide' },
  { emoji: '🏠', title: '租房住宿', slug: 'accommodation' },
  { emoji: '🏦', title: '银行开户', slug: 'banking' },
  { emoji: '🏥', title: '医疗保障', slug: 'healthcare' },
  { emoji: '🚇', title: '交通出行', slug: 'transport' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🇬🇧 英国留学指南
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          25年 Fall 入学，一站式留学生活手册。<br />
          开源共创，让每一届新生少走弯路。
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/guide"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors no-underline"
          >
            开始阅读 →
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors no-underline"
          >
            GitHub 共创
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">三大模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.link}
              to={f.link}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow no-underline group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-main group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">快速跳转</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.slug}
                to={`/guide/${item.slug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-bg-light hover:bg-blue-50 transition-colors no-underline border border-transparent hover:border-primary/20"
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-sm font-medium text-text-main">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">一起完善这份指南</h2>
        <p className="text-text-secondary mb-6 max-w-lg mx-auto">
          这份指南属于每一位英国留学生。发现错误或有想补充的内容？欢迎在社区留言或提交 PR。
        </p>
        <Link
          to="/community"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors no-underline"
        >
          参与共创 →
        </Link>
      </section>
    </div>
  );
}
