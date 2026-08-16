import DemoWindow from './DemoWindow';
import ProjectMeta from './ProjectMeta';
import { RagDemo, VoiceAgentDemo, TeachingRobotDemo, LmsDemo } from '../demos';

// Maps a project id to its demo component.
const demoMap = {
  rag: RagDemo,
  voice: VoiceAgentDemo,
  'teaching-robot': TeachingRobotDemo,
  lms: LmsDemo,
};

export default function ProjectSection({ project }) {
  const Demo = demoMap[project.demo];
  const badge =
    project.demo === 'rag'
      ? 'Portfolio Demo — preloaded knowledge base'
      : 'Portfolio Demo';

  return (
    <article className="project container reveal" id={project.id}>
      <div className="project__head">
        <span className="project__number">{project.number}</span>
        <h3 className="project__title">{project.title}</h3>
      </div>
      <p className="project__desc">{project.description}</p>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <DemoWindow appName={project.title} badge={badge}>
        <Demo />
      </DemoWindow>

      <ProjectMeta
        built={project.built}
        how={project.how}
        architecture={project.architecture}
      />

      {project.github && (
        <div className="project__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn">
            GitHub
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </article>
  );
}
