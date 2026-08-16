import { experience } from '../data/projects';

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="about">
        <div className="reveal">
          <header className="section-header">
            <p className="section-header__label">About</p>
            <h2 className="section-header__title">A bit about me</h2>
          </header>
          <div className="about__body">
            <p>
              I'm a recent B.Tech graduate in Artificial Intelligence and Data
              Science. I enjoy building practical AI systems and shipping
              software products end-to-end.
            </p>
            <p>
              My work sits across AI engineering, generative AI, Python, and
              full-stack development. I like working on the parts that make a
              system actually useful: retrieval, interaction, deployment and
              not just the model layer.
            </p>
          </div>
        </div>

        <div className="reveal">
          <header className="section-header">
            <p className="section-header__label">Experience</p>
            <h2 className="section-header__title">Where I've worked</h2>
          </header>
          <div className="experience">
            {experience.map((e) => (
              <div key={e.org} className="experience__item">
                <h3 className="experience__org">{e.org}</h3>
                <p className="experience__role">{e.role}</p>
                <p className="experience__period">{e.period}</p>
                <p className="experience__desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
