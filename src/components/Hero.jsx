import { profile } from '../data/projects';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            {profile.role}
          </p>

          <h1 className="hero__title">
            I build AI systems
            <br />
            and software <span className="accent">products.</span>
          </h1>

          <p className="hero__sub">
            I work across AI engineering, generative AI, Python, and
            full-stack developmen, building systems from idea to
            deployed product.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View my work
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>

            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}