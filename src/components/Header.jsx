import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/guide', label: '留学指南' },
  { to: '/tools', label: '实用工具' },
  { to: '/community', label: '交流社区' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg no-underline">
          <span className="text-2xl">🇬🇧</span>
          <span>英国留学指南</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline
                ${location.pathname === link.to
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:bg-bg-light hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
