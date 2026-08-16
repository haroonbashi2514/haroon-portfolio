export default function SectionHeader({ label, title, sub }) {
  return (
    <header className="section-header reveal">
      {label && <p className="section-header__label">{label}</p>}
      <h2 className="section-header__title">{title}</h2>
      {sub && <p className="section-header__sub">{sub}</p>}
    </header>
  );
}
