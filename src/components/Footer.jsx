import { profile } from '../data/projects';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{profile.name}</span>
        <span className="footer__meta">
          Built by Homo sapiens · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
