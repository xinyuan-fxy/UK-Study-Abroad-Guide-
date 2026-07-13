import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/guide', label: '留学指南' },
  { to: '/tools', label: '实用工具' },
  { to: '/community', label: '交流社区' },
];

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const linkClass = (to) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline block ${
      isActive(to) ? 'bg-primary text-white' : 'text-text-secondary hover:bg-bg-light hover:text-primary'
    }`;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-primary font-bold text-lg no-underline" onClick={() => setOpen(false)}>
          原心咯的英国留学指南
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="sm:hidden p-2 text-text-secondary hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="切换菜单"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden border-t border-border bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(link.to)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
