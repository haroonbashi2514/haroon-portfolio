export default function ProjectMeta({ built, how, architecture }) {
  return (
    <div className="project__meta">
      <div className="project__meta-block">
        <h4>What I built</h4>
        <p>{built}</p>
      </div>
      <div className="project__meta-block">
        <h4>How it works</h4>
        <p>{how}</p>
      </div>
      {architecture && architecture.length > 0 && (
        <div className="project__arch" style={{ gridColumn: '1 / -1' }}>
          <p className="project__arch-label">Architecture</p>
          <div className="project__arch-flow">
            {architecture.map((step, i) => (
              <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span className="project__arch-step">{step}</span>
                {i < architecture.length - 1 && <span className="project__arch-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
