export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">🇬🇧 英国留学指南</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              25年Fall英国留学生的一站式生活指南，<br />
              从行前准备到落地生活，伴你顺利启程。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">快速导航</h4>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li><a href="/guide" className="hover:text-white transition-colors">留学指南</a></li>
              <li><a href="/tools" className="hover:text-white transition-colors">实用工具</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">交流社区</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">共创参与</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              本项目开源在 GitHub，欢迎提交 PR 或 Issue 一起完善这份指南。
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-accent-light hover:text-white transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs text-gray-400">
          © 2025 UK Study Abroad Guide · 开源共创 · 内容仅供参考
        </div>
      </div>
    </footer>
  );
}
