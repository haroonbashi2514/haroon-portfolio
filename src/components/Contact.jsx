import { profile } from '../data/projects';

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="contact reveal">
        <p className="section-header__label">Contact</p>
        <h2 className="contact__title">Have a project or opportunity?</h2>
        <p className="contact__sub">
          I'm open to AI engineer, Python developer, and full-stack roles.
          Reach out through any of the links below.
        </p>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`} className="contact__link">
            <span className="contact__link-label">Email</span>
            <span>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__link">
            <span className="contact__link-label">LinkedIn</span>
            <span>haroonbashi</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
            <span className="contact__link-label">GitHub</span>
            <span>haroonbashi</span>
          </a>
          <a href={`tel:${profile.phone}`} className="contact__link">
            <span className="contact__link-label">Phone</span>
            <span>{profile.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
