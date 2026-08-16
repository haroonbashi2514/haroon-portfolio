import { currentlyBuilding } from '../data/projects';

export default function CurrentlyBuilding() {
  return (
    <section className="section container" id="building">
      <header className="section-header reveal">
        <p className="section-header__label">In Progress</p>
        <h2 className="section-header__title">Currently Building</h2>
        <p className="section-header__sub">
          Two active projects I'm working on outside of completed work.
        </p>
      </header>

      <div className="building">
        {currentlyBuilding.map((p) => (
          <div key={p.id} className="building__card reveal">
            <div className="building__head">
              <span className="building__name">{p.name}</span>
              <span className="building__status">{p.status}</span>
            </div>
            <p className="building__desc">{p.description}</p>
            <div className="building__progress">
              <div
                className="building__progress-bar"
                role="progressbar"
                aria-valuenow={p.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${p.name} progress`}
              >
                <div className="building__progress-fill" style={{ width: `${p.progress}%` }} />
              </div>
              <span className="building__progress-label">{p.progress}%</span>
            </div>
            <div className="building__milestones">
              {p.milestones.map((m) => (
                <span
                  key={m.label}
                  className={`building__milestone ${m.done ? 'building__milestone--done' : ''}`}
                >
                  {m.done ? '✓ ' : ''}
                  {m.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
