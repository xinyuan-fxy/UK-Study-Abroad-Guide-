import { Link } from 'react-router-dom';

const articles = [
  {
    slug: 'pre-departure',
    title: '行前准备清单',
    emoji: '🎓',
    desc: '出发前的必备物品、文件清单、体检疫苗等全攻略。',
    category: '行前',
  },
  {
    slug: 'visa-guide',
    title: '签证申请指南',
    emoji: '🛂',
    desc: 'Tier 4 学生签证申请流程、材料准备与面试经验。',
    category: '行前',
  },
  {
    slug: 'accommodation',
    title: '租房与住宿攻略',
    emoji: '🏠',
    desc: '学校宿舍 vs 校外租房，如何找房、签合同、避坑指南。',
    category: '落地',
  },
  {
    slug: 'banking',
    title: '银行开户指南',
    emoji: '🏦',
    desc: '英国主流银行对比、开户流程、国际汇款方式。',
    category: '落地',
  },
  {
    slug: 'mobile-sim',
    title: '电话卡与手机套餐',
    emoji: '📱',
    desc: '英国运营商对比、套餐选择、落地前办卡攻略。',
    category: '落地',
  },
  {
    slug: 'healthcare',
    title: '医疗与 NHS 指南',
    emoji: '🏥',
    desc: 'NHS 注册流程、GP 预约、IHS 费用说明、常见就医指南。',
    category: '生活',
  },
  {
    slug: 'transport',
    title: '交通出行攻略',
    emoji: '🚇',
    desc: 'Oyster Card、Railcard、公交地铁、火车票购买全攻略。',
    category: '生活',
  },
  {
    slug: 'food-shopping',
    title: '饮食与购物指南',
    emoji: '🍜',
    desc: '超市分级、中餐中超、学生折扣、自己做饭省钱攻略。',
    category: '生活',
  },
  {
    slug: 'part-time-work',
    title: '兼职打工指南',
    emoji: '💼',
    desc: '学生工时限制、NI Number 申请、常见兼职与薪资。',
    category: '生活',
  },
  {
    slug: 'social-life',
    title: '社交与娱乐生活',
    emoji: '🎉',
    desc: '认识朋友、英国社交礼仪、节日活动、周边旅行。',
    category: '生活',
  },
  {
    slug: 'safety',
    title: '安全须知',
    emoji: '🔐',
    desc: '紧急电话、使馆信息、常见骗局、自我保护指南。',
    category: '生活',
  },
  {
    slug: 'study-tips',
    title: '学习与学术攻略',
    emoji: '📚',
    desc: '教学方式、论文写作、学术诚信、学习工具推荐。',
    category: '学习',
  },
  {
    slug: 'after-graduation',
    title: '毕业去向规划',
    emoji: '🎓',
    desc: 'PSW签证、留英工作、回国发展、离开前待办清单。',
    category: '毕业',
  },
];

const categories = [...new Set(articles.map((a) => a.category))];

export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">📚 留学指南</h1>
      <p className="text-text-secondary mb-8">
        从行前准备到英国落地生活，全方位攻略持续更新中。
      </p>

      {categories.map((cat) => (
        <section key={cat} className="mb-10">
          <h2 className="text-lg font-semibold text-primary border-b border-border pb-2 mb-4">
            {cat}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles
              .filter((a) => a.category === cat)
              .map((article) => (
                <Link
                  key={article.slug}
                  to={`/guide/${article.slug}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all no-underline group"
                >
                  <span className="text-3xl flex-shrink-0">{article.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
