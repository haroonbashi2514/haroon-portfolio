// Reusable framed application preview window.
// Renders children inside a product-style frame with window controls and a title bar.
// `appName` shows in the title bar; `badge` shows an optional right-aligned badge.

export default function DemoWindow({ appName, badge, children }) {
  return (
    <div className="demowindow reveal" role="figure" aria-label={`${appName} demo preview`}>
      <div className="demowindow__bar">
        <div className="demowindow__dots" aria-hidden="true">
          <span className="demowindow__dot" />
          <span className="demowindow__dot" />
          <span className="demowindow__dot" />
        </div>
        <span className="demowindow__name">{appName}</span>
        {badge && <span className="demowindow__badge">{badge}</span>}
      </div>
      <div className="demowindow__body">{children}</div>
      <div className="demowindow__notice">Best experienced on a larger screen</div>
    </div>
  );
}
