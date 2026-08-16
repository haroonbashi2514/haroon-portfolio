import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Building', href: '#building' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner">
        <div className="nav__brand">
  <img
    src={`${import.meta.env.BASE_URL}haroon-profile.jpeg`}
    alt="Haroon Al Rashith"
    className="nav__brand-avatar"
  />
  Haroon Al Rashith
</div>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
